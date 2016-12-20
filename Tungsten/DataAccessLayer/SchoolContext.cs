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
        public DbSet<Group> Groups;
        public DbSet<Course> Courses;
        public DbSet<Segment> Segments;
        public DbSet<Assignment> Assignments;
        public DbSet<Lesson> Lessons;

        public SchoolContext() :base("DefaultConnection")
        {
            
        }
    }
}