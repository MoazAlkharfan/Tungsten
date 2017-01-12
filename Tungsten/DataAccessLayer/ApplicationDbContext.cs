using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Data.Entity;
using Tungsten.Models;
using System.Threading.Tasks;

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

        public override IDbSet<ApplicationUser> Users
        {
            get
            {
                return base.Users;
            }

            set
            {
                base.Users = value;
            }
        }

        public override Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }

        public override IDbSet<IdentityRole> Roles
        {
            get
            {
                return base.Roles;
            }

            set
            {
                base.Roles = value;
            }
        }

        public override DbSet Set(Type entityType)
        {
            return base.Set(entityType);
        }
        
        //public System.Data.Entity.DbSet<Tungsten.Models.ApplicationUser> ApplicationUsers { get; set; }
    }
}