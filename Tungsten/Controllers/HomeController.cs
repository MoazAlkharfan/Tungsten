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
        public ActionResult Error404() =>
            RedirectToAction("Index");


        public JsonResult GetGroups() =>
            Json(repo.GetGroups(), JsonRequestBehavior.AllowGet);

        public JsonResult GetGroup(string id) => id == "" ? null
            : Json(repo.FindGroup(id), JsonRequestBehavior.AllowGet);

        [AllowAnonymous]
        public JsonResult GetSchedule(string id) =>
            Json(repo.FindGroup(id)?.Schedule, JsonRequestBehavior.AllowGet);


        public JsonResult CreateGroup(Group group) =>
            !ModelState.IsValid ? null
                : repo.CreateGroup(group)
                    ? Json(repo.FindGroup(group.Id), JsonRequestBehavior.AllowGet)
                    : Json(group, JsonRequestBehavior.AllowGet);

        public JsonResult EditGroup(Group group) =>
            !ModelState.IsValid ? null
            : repo.EditGroup(group)
                ? Json(repo.FindGroup(group.Id), JsonRequestBehavior.AllowGet)
                : Json(group, JsonRequestBehavior.AllowGet);

        public JsonResult CreateCourse(Course course) =>
            !ModelState.IsValid ? null
            : repo.CreateCourse(course)
                ? Json(repo.FindCourse(course.Id), JsonRequestBehavior.AllowGet)
                :Json(course, JsonRequestBehavior.AllowGet);

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
