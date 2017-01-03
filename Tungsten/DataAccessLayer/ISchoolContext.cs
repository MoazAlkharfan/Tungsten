using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Tungsten.Models;
using Tungsten.Models.FileSystem;

namespace Tungsten.DataAccessLayer
{
    public interface ISchoolContext
    {
        DbSet<Group> Groups { get; set; }
        DbSet<Course> Courses { get; set; }
        DbSet<Segment> Segments { get; set; }
        DbSet<Assignment> Assignments { get; set; }
        DbSet<Lesson> Lessons { get; set; }
        DbSet<FileDetail> FileDetails { get; set; }
        int SaveChanges();
    }
}