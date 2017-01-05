using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Net;
using System.Threading.Tasks;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using Tungsten.DataAccessLayer;
using Tungsten.Models.FileSystem;
using Tungsten.Models;
using Microsoft.AspNet.Identity.EntityFramework;

namespace Tungsten.Controllers
{
    [Authorize]
    public class FileHandlerController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        private UserStore<ApplicationUser> userStore;
        private UserManager<ApplicationUser> userManager;
        private ApplicationUser appUser;

        public FileHandlerController()
        {
            userStore = new UserStore<ApplicationUser>(db);
            userManager = new UserManager<ApplicationUser>(userStore);
        }

        //
        // GET: /FileHandler/
        public async Task<ActionResult> Index()
        {
            appUser = userManager.FindById(User.Identity.GetUserId());
            var allFiles = await db.FileDetails.Include(f => f.Path == appUser.CurrentDirectory).ToListAsync();

            var roleStore = new RoleStore<IdentityRole>(db);
            var roleManager = new RoleManager<IdentityRole>(roleStore);

            allFiles.ForEach(f => f.Priority = (userManager.IsInRole(f.OwnerId, "Administrator") ? Settings.PriorityAdministrator : (userManager.IsInRole(f.OwnerId, "Teacher") ? Settings.PriorityTeacher : Settings.PriorityDefault)));
            allFiles.Sort(delegate(FileDetail x, FileDetail y)
            {
                if (x.Priority != y.Priority)
                {
                    return (x.Priority > y.Priority) ? -1 : 1;
                }
                else
                {
                    return (x.UploadTime > y.UploadTime) ? -1 : (x.UploadTime < y.UploadTime ? 1 : 0);
                }
            });
            return View(allFiles);
        }

        public ActionResult UploadSelector()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Upload()
        {
            if (ModelState.IsValid)
            {
                List<FileDetail> fileDetails = new List<FileDetail>();
                int count = Request.Files.Count;
                int processAttempts = 0;
                int processSuccesses = 0;

                for (int i = 0; i < count; i++)
                {
                    var file = Request.Files[i];

                    if (file != null && file.ContentLength > 0)
                    {
                        var fileName = Path.GetFileName(file.FileName);
                        FileDetail fileDetail = new FileDetail()
                        {
                            FileName = fileName,
                            Extension = Path.GetExtension(fileName),
                            Id = Guid.NewGuid(),
                            OwnerId = User.Identity.GetUserId(),
                            UploadTime = DateTime.Now
                        };

                        // TODO: use fileDetails for error reporting involving individual files
                        fileDetails.Add(fileDetail);

                        processAttempts++;

                        var path = Path.Combine(Server.MapPath(HelperMethods.GeneratePath(appUser)), fileDetail.Id + fileDetail.Extension);
                        try
                        {
                            file.SaveAs(path);
                            db.FileDetails.Add(fileDetail);
                            processSuccesses++;
                        }
                        catch
                        {
                            throw;
                        }
                    }
                }

                db.SaveChanges();

                if (processAttempts > 0)
                {
                    return RedirectToAction("Index");
                }
                else
                {
                    return View();
                }
            }

            return View();
        }

        public FileResult Download(string dbName, string originalName)
        {
            return File(Path.Combine(Server.MapPath(HelperMethods.GeneratePath(appUser)), dbName), System.Net.Mime.MediaTypeNames.Application.Octet, originalName);
        }

        //public ActionResult Edit(int? id)
        //{
        //    if (id == null)
        //    {
        //        return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
        //    }
        //    return View();
        //}

        //[HttpPost]
        //[Authorize]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit()
        //{
        //    if (ModelState.IsValid)
        //    {
        //        //New Files
        //        for (int i = 0; i < Request.Files.Count; i++)
        //        {
        //            var file = Request.Files[i];

        //            if (file != null && file.ContentLength > 0)
        //            {
        //                var fileName = Path.GetFileName(file.FileName);
        //                FileDetail fileDetail = new FileDetail()
        //                {
        //                    FileName = fileName,
        //                    Extension = Path.GetExtension(fileName),
        //                    Id = Guid.NewGuid(),
        //                };
        //                var path = Path.Combine(Server.MapPath(ROOT_DIRECTORY), fileDetail.Id + fileDetail.Extension);
        //                file.SaveAs(path);

        //                db.Entry(fileDetail).State = EntityState.Added;
        //            }
        //        }

        //        db.SaveChanges();
        //        return RedirectToAction("Index");
        //    }
        //    return View();
        //}

        [HttpPost]
        public JsonResult DeleteFile(string id)
        {
            if (String.IsNullOrEmpty(id))
            {
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new { Result = "Error" });
            }
            try
            {
                Guid guid = new Guid(id);
                FileDetail fileDetail = db.FileDetails.Find(guid);
                if (fileDetail == null)
                {
                    Response.StatusCode = (int)HttpStatusCode.NotFound;
                    return Json(new { Result = "Error" });
                }

                //Remove from database
                db.FileDetails.Remove(fileDetail);
                db.SaveChanges();

                //Delete file from the file system
                var path = Path.Combine(Server.MapPath(HelperMethods.GeneratePath(appUser)), fileDetail.Id + fileDetail.Extension);
                if (System.IO.File.Exists(path))
                {
                    System.IO.File.Delete(path);
                }
                return Json(new { Result = "OK" });
            }
            catch (Exception ex)
            {
                return Json(new { Result = "ERROR", Message = ex.Message });
            }
        }
    }
}