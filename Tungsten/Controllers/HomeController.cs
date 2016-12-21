using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Tungsten.Models;
using Tungsten.Repositories;
using Tungsten.Attributes;

namespace Tungsten.Controllers
{
    [ExtendedAuthorize]
    public class HomeController : Controller
    {
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
        public ActionResult Index()
        {
            if (User.Identity.IsAuthenticated)
                return RedirectToAction("PanelIndex");

            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult PanelIndex()
        {
            return View();
        }

        public JsonResult CreateCourse(Course course)
        {
            if(ModelState.IsValid)
            {
                repo.CreateCourse(course);
                return Json(new { status = "Success" });
            }
            else
            {
                return Json(new { status = "Error"});
            }
        }
    }
}
