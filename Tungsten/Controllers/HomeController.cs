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
using Microsoft.AspNet.Identity.Owin;
using System.Threading.Tasks;

namespace Tungsten.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        JsonSerializerSettings jss = new JsonSerializerSettings { ReferenceLoopHandling = ReferenceLoopHandling.Ignore };
        private ISchoolRepo repo;

        private ApplicationUserManager UserManager
        {
            get
            {
                return HttpContext.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
        }

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

        public async Task<JsonResult> GetUserList()
        {
            var user = await UserManager.FindByIdAsync(User.Identity.GetUserId());
            List<ApplicationUser> users = UserManager.Users.Where(u => user.Groups.Any(g => !u.Groups.Contains(g))).AsEnumerable().Select(us => us).ToList();

            return Json(JsonConvert.SerializeObject(users, Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
        }


        public async Task<JsonResult> GetGroups()
        {
            var user = await UserManager.FindByIdAsync(User.Identity.GetUserId());
            
            return Json(JsonConvert.SerializeObject(user.Groups.ToList(), Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
        }

        public async Task<JsonResult> AddUserToGroup(string id)
        {
            string CurrentUserId = User.Identity.GetUserId();
            var user = await UserManager.FindByIdAsync(CurrentUserId);

            user.Groups.Add(repo.FindGroup(id));
            var result = await UserManager.UpdateAsync(user);

            return Json(new { Success = result.Succeeded }, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetGroup(string id)
        {
            if (id == "")
                return null;

            return Json(JsonConvert.SerializeObject(repo.FindGroup(id), Formatting.Indented, jss), JsonRequestBehavior.AllowGet);
        }
        
        [AllowAnonymous]
        public string GetSchedule(string id) => JsonConvert.SerializeObject(repo.FindGroup(id)?.Schedule, Formatting.None, jss);

        
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
