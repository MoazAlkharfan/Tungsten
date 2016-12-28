using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Tungsten.Models;

namespace Tungsten.DataAccessLayer
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>, ISchoolContext
    {
        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public DbSet<Group> Groups { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Segment> Segments { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<FilePath> FilePaths { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        //public System.Data.Entity.DbSet<Tungsten.Models.ApplicationUser> ApplicationUsers { get; set; }
    }
}