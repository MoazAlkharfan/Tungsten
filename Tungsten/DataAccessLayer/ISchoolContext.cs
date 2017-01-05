using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Tungsten.Models;

namespace Tungsten.DataAccessLayer
{
    public interface ISchoolContext
    {
        DbSet<Group> Groups { get; set; }
        DbSet<Course> Courses { get; set; }
        DbSet<Segment> Segments { get; set; }
        DbSet<Assignment> Assignments { get; set; }
        DbSet<Lesson> Lessons { get; set; }
        DbSet<FilePath> FilePaths { get; set; }
        int SaveChanges();
        Task<int> SaveChangesAsync();
        IDbSet<ApplicationUser> Users { get; set; }
        DbSet Set(Type entityType);
        IDbSet<IdentityRole> Roles { get; set; }

    }
}