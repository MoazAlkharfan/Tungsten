using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Tungsten.Attributes;
using Microsoft.AspNet.Identity;
using Tungsten.Models;
using Tungsten.Repositories;
using Newtonsoft.Json;

namespace Tungsten.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        JsonSerializerSettings jss = new JsonSerializerSettings { ReferenceLoopHandling = ReferenceLoopHandling.Ignore };
        private ISchoolRepo repo;

        public HomeController()
        {
            this.repo = new SchoolRepo();
        }

        public HomeController(ISchoolRepo newrepo)
        {
            this.repo = newrepo;
        }

        [AllowAnonymous]
        public ActionResult Error404()
        {
            return RedirectToAction("Index");
        }

        
        public JsonResult GetGroups()
        {
            return Json(JsonConvert.SerializeObject(repo.GetGroups().ToList(), Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
        }

        
        public JsonResult GetGroup(string id)
        {
            if (id == "")
                return null;

            return Json(JsonConvert.SerializeObject(repo.FindGroup(id), Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
        }
        
        public string GetSchedule(string id)
        {
            if (id == "")
                return null;

            return JsonConvert.SerializeObject(repo.FindGroup(id).Schedule, Formatting.None, jss);
        }

        
        public JsonResult CreateGroup(Group group)
        {
            if (group == null)
                return null;

            if (repo.CreateGroup(group))
            {
                return Json(JsonConvert.SerializeObject(repo.FindGroup(group.Id), Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(JsonConvert.SerializeObject(group, Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult EditGroup(Group group)
        {
            if (group == null)
                return null;

            if(repo.EditGroup(group))
            {
                return Json(JsonConvert.SerializeObject(repo.FindGroup(group.Id), Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(JsonConvert.SerializeObject(group, Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult CreateCourse(Course course)
        {
            if (course == null)
                return null;

            if (repo.CreateCourse(course))
            {
                return Json(JsonConvert.SerializeObject(repo.FindCourse(course.Id), Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json(JsonConvert.SerializeObject(course, Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
            }
        }

        public JsonResult GetCourse(string id)
        {
            if (string.IsNullOrEmpty(id))
                return null;


            return Json(JsonConvert.SerializeObject(repo.FindCourse(id), Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
        }

        [AllowAnonymous]
        public ActionResult Index()
        {
            //if (User.Identity.IsAuthenticated)
             //   return RedirectToAction("Index", "Groups");

            ViewBag.Title = "Home Page";
            ViewBag.IsAuthenticated = User.Identity.IsAuthenticated;
            ViewBag.UserName = User.Identity.Name;

            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }
        
    }


}
