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
    //[ExtendedAuthorize]
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

        [AllowAnonymous]
        public JsonResult GetGroups()
        {
            return Json(JsonConvert.SerializeObject(repo.GetGroups().ToList(), Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
        }

        [AllowAnonymous]
        public ActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
                return RedirectToAction("Index", "Groups");

            ViewBag.Title = "Home Page";
            ViewBag.IsAuthenticated = User.Identity.IsAuthenticated;
            ViewBag.UserName = User.Identity.Name;

            return View();
        }

        public ActionResult Dashboard()
        {
            return View();
        }

        public ActionResult CreateCourse()
        {
            return View();
        }


        [HttpPost]
        public JsonResult CreateCourse(Course newcourse)
        {
            if (ModelState.IsValid)
            {
                repo.CreateCourse(newcourse);
                return Json(new { status = "Success" });
            }
            else
            {
                return Json(new { status = "Fail" });
            }
        }
    }


}
