﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Tungsten.Attributes;
using Tungsten.Models;
using Tungsten.Repositories;

namespace Tungsten.Controllers
{
    [ExtendedAuthorize]
    public class GroupsController : Controller
    {
        private ISchoolRepo repository;

        public GroupsController(ISchoolRepo repo)
        {
            this.repository = repo;
        }

        public GroupsController()
        {
            this.repository = new SchoolRepo();
        }

        // GET: Groups
        [Authorize]
        public ActionResult Index()
        {
            return View(repository);
        }

        // GET: Groups/Details/5
        [Authorize]
        public ActionResult Details(string id)
        {
            var details = repository.FindGroup(id);

            if (details != null)
            {
                return RedirectToAction("Error");
            }

            return View(details);
        }

        // GET: Groups/Create
        [Authorize]
        public ActionResult Create()
        {
            return View();
        }

        // POST: Groups/Create
        [HttpPost]
        [Authorize]
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
        [Authorize]
        public ActionResult Edit(string id)
        {
            return View();
        }

        // POST: Groups/Edit/5
        [HttpPost]
        [Authorize]
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
        [Authorize]
        public ActionResult Delete(string id)
        {
            return View();
        }

        // POST: Groups/Delete/5
        [HttpPost]
        [Authorize]
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
