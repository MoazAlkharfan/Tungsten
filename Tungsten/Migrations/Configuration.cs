namespace Tungsten.Migrations
{
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Models;
    using Microsoft.AspNet.Identity;
    using System.Data.Entity.Validation;
    using System.Diagnostics;

    internal sealed class Configuration : DbMigrationsConfiguration<Tungsten.DataAccessLayer.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Tungsten.DataAccessLayer.ApplicationDbContext context)
        {
            try
            {
                var userStore = new UserStore<ApplicationUser>(context);
                var userManager = new UserManager<ApplicationUser>(userStore);
            
                //context.Groups.AddOrUpdate(
                //    g => g.Name,
                //    new Group { Name = "9B", Description = "" }
                //);



                //string group1id = context.Groups.ElementAt(0).Id;

                var user1 = new ApplicationUser { UserName = "haxxxor33", Name = "Victor Jonsson", PhoneNumber = "+46701234567", Email = "haxxxor33@fakemail.com", Address = "Södra Gågatan 33, 93791 Burträsk", SSN = "010322-8634" };
                var user2 = new ApplicationUser { UserName = "elite120", Name = "Johan Andersson", PhoneNumber = "+46701852567", Email = "elite120@fakemail.com", Address = "Norra Gågatan 12, 93791 Burträsk", SSN = "010421-3124" };
                var user3 = new ApplicationUser { UserName = "l33t32", Name = "Philip Pettersson", PhoneNumber = "+46701212367", Email = "l33t32@fakemail.com", Address = "Södra E4an 24, 93791 Burträsk", SSN = "010415-3752" };
                var user4 = new ApplicationUser { UserName = "tommy", Name = "Tommy Lundqvist", PhoneNumber = "+46701233217", Email = "tommy@fakemail.com", Address = "Gulgatan 15, 93791 Burträsk", SSN = "011205-7921" };
                var user5 = new ApplicationUser { UserName = "kittenlover1", Name = "Erik Lindqvist", PhoneNumber = "+46731233567", Email = "kittenlover1@fakemail.com", Address = "Gröngatan 55, 93791 Burträsk", SSN = "011222-6475" };
                var user6 = new ApplicationUser { UserName = "engulsparris", Name = "Wiktor T", PhoneNumber = "+4670127654", Email = "engulsparris@fakemail.com", Address = "Cykelvägen 38, 93791 Burträsk", SSN = "010324-3217" };
                var user7 = new ApplicationUser { UserName = "martinpettersson", Name = "Martin Pettersson", PhoneNumber = "+46701235468", Email = "martinpettersson@fakemail.com", Address = "Bakgatan 34, 93791 Burträsk", SSN = "010727-8212" };
                var user8 = new ApplicationUser { UserName = "petterisbest", Name = "Niclas Jonsson", PhoneNumber = "+46701315648", Email = "petterisbest@fakemail.com", Address = "Södragatan  11, 93791 Burträsk", SSN = "011124-3578" };
                var user9 = new ApplicationUser { UserName = "trekkzer", Name = "Jon Pärsson", PhoneNumber = "+46701275321", Email = "trekkzer@fakemail.com", Address = "Patrikgränd 1, 93791 Burträsk", SSN = "0106275-9545" };

                userManager.Create(user1, user1.UserName + "123#");
                userManager.Create(user2, user2.UserName + "123#");
                userManager.Create(user3, user3.UserName + "123#");
                userManager.Create(user4, user4.UserName + "123#");
                userManager.Create(user5, user5.UserName + "123#");
                userManager.Create(user6, user6.UserName + "123#");
                userManager.Create(user7, user7.UserName + "123#");
                userManager.Create(user8, user8.UserName + "123#");
                userManager.Create(user9, user9.UserName + "123#");
                /*
                if (!context.Roles.Any(r => r.Name == "Student"))
                {
                    var roleStore = new RoleStore<IdentityRole>(context);
                    var roleManager = new RoleManager<IdentityRole>(roleStore);

                    var student = new IdentityRole { Name = "Student" };
                    roleManager.Create(student);
                }

                if (!context.Roles.Any(r => r.Name == "Teacher"))
                {
                    var roleStore = new RoleStore<IdentityRole>(context);
                    var roleManager = new RoleManager<IdentityRole>(roleStore);

                    var teacher = new IdentityRole { Name = "Teacher" };
                    roleManager.Create(teacher);
                }*/

                context.SaveChanges();
            }
            catch (DbEntityValidationException dbEx)
            {
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        Trace.TraceInformation("Property: {0} Error: {1}",
                                                validationError.PropertyName,
                                                validationError.ErrorMessage);
                    }
                }
            }
        }
    }
}
