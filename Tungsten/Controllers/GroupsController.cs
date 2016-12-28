using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Tungsten.Models;
using Tungsten.Repositories;

namespace Tungsten.Controllers
{
    [Authorize(Roles = "Administrator, Teacher")]
    public class GroupsController : Controller
    {
        private ISchoolRepo repository;

        public GroupsController(ISchoolRepo repo)
        {
            repository = repo;
        }

        public GroupsController()
        {
            repository = new SchoolRepo();
        }

        // GET: Groups
        public ActionResult Index()
        {
            return View(repository);
        }

        // GET: Groups/Details/5
        public ActionResult Details(string id)
        {
            var details = repository.FindGroup(id);

            if (details == null)
            {
                return RedirectToAction("Error");
            }

            return View(details);
        }

        // GET: Groups/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Groups/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Name, Description")] Group group)
        {
            try
            {
                // TODO: Add insert logic here
                repository.CreateGroup(group);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Groups/Edit/5
        public ActionResult Edit(string id)
        {
            return View();
        }

        // POST: Groups/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Name, Description")] Group group)
        {
            try
            {
                // TODO: Add update logic here
                repository.EditGroup(group);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Groups/Delete/5
        public ActionResult Delete(string id)
        {
            return View();
        }

        // POST: Groups/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(string id, Group group)
        {
            try
            {
                // TODO: Add delete logic here
                repository.RemoveGroup(group);

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}