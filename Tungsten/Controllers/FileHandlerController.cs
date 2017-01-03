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

namespace Tungsten.Controllers
{
    public class FileHandlerController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        const string ROOT_DIRECTORY = "~/App_Data/FileRepository";

        //
        // GET: /FileHandler/
        public async Task<ActionResult> Index()
        {
            return View(await db.FileDetails.ToListAsync());
        }

        public ActionResult UploadSelector()
        {
            return View();
        }

        [HttpPost]
        [Authorize]
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
                        fileDetails.Add(fileDetail);
                        processAttempts++;

                        var path = Path.Combine(Server.MapPath(ROOT_DIRECTORY), fileDetail.Id + fileDetail.Extension);
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

        [Authorize]
        public FileResult Download(string dbName, string originalName)
        {
            return File(Path.Combine(Server.MapPath(ROOT_DIRECTORY), dbName), System.Net.Mime.MediaTypeNames.Application.Octet, originalName);
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
        [Authorize]
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
                var path = Path.Combine(Server.MapPath(ROOT_DIRECTORY), fileDetail.Id + fileDetail.Extension);
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