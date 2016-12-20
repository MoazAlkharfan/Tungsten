using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Tungsten.Models;

namespace Tungsten.DataAccessLayer
{
    public class SchoolContext : DbContext, ISchoolContext
    {
        public DbSet<Group> Groups { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Segment> Segments { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
        public DbSet<Lesson> Lessons { get; set; }

        public SchoolContext() :base("DefaultConnection")
        {
            
        }
    }
}