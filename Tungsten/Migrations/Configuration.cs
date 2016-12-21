namespace Tungsten.Migrations
{
    using Microsoft.AspNet.Identity.EntityFramework;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Models;
    using Microsoft.AspNet.Identity;
    using System.Collections.Generic;

    internal sealed class Configuration : DbMigrationsConfiguration<Tungsten.DataAccessLayer.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Tungsten.DataAccessLayer.ApplicationDbContext context)
        {
            //if (System.Diagnostics.Debugger.IsAttached == false)
            //    System.Diagnostics.Debugger.Launch();

            var userStore = new UserStore<ApplicationUser>(context);
            var userManager = new UserManager<ApplicationUser>(userStore);

            var group1 = new Group { Name = "9B", Description = "" };

            context.Groups.AddOrUpdate(
                g => g.Name,
                group1
            );

            var student1 = new ApplicationUser { UserName = "haxxxor33", Name = "Victor Jonsson", PhoneNumber = "+46701234567", Email = "haxxxor33@fakemail.com", Address = "Södra Gågatan 33, 93791 Burträsk", SSN = "010322-8634" };
            var student2 = new ApplicationUser { UserName = "elite120", Name = "Johan Andersson", PhoneNumber = "+46701852567", Email = "elite120@fakemail.com", Address = "Norra Gågatan 12, 93791 Burträsk", SSN = "010421-3124" };
            var student3 = new ApplicationUser { UserName = "l33t32", Name = "Philip Pettersson", PhoneNumber = "+46701212367", Email = "l33t32@fakemail.com", Address = "Södra E4an 24, 93791 Burträsk", SSN = "010415-3752" };
            var student4 = new ApplicationUser { UserName = "tommy", Name = "Tommy Lundqvist", PhoneNumber = "+46701233217", Email = "tommy@fakemail.com", Address = "Gulgatan 15, 93791 Burträsk", SSN = "011205-7921" };
            var student5 = new ApplicationUser { UserName = "kittenlover1", Name = "Erik Lindqvist", PhoneNumber = "+46731233567", Email = "kittenlover1@fakemail.com", Address = "Gröngatan 55, 93791 Burträsk", SSN = "011222-6475" };
            var student6 = new ApplicationUser { UserName = "engulsparris", Name = "Wiktor T", PhoneNumber = "+4670127654", Email = "engulsparris@fakemail.com", Address = "Cykelvägen 38, 93791 Burträsk", SSN = "010324-3217" };
            var student7 = new ApplicationUser { UserName = "martinpettersson", Name = "Martin Pettersson", PhoneNumber = "+46701235468", Email = "martinpettersson@fakemail.com", Address = "Bakgatan 34, 93791 Burträsk", SSN = "010727-8212" };
            var student8 = new ApplicationUser { UserName = "petterisbest", Name = "Niclas Jonsson", PhoneNumber = "+46701315648", Email = "petterisbest@fakemail.com", Address = "Södragatan  11, 93791 Burträsk", SSN = "011124-3578" };
            var student9 = new ApplicationUser { UserName = "trekkzer", Name = "Jon Pärsson", PhoneNumber = "+46701275321", Email = "trekkzer@fakemail.com", Address = "Patrikgränd 1, 93791 Burträsk", SSN = "010625-9545" };

            var teacher1 = new ApplicationUser { UserName = "lena.lundmark", Name = "Lena Lundmark", PhoneNumber = "+46703334567", Email = "lena.lundmark@skola.com", Address = "Tvärsövergatan 39, 93793 Burträsk", SSN = "531124-4375" };


            userManager.Create(student1, "Default123#");
            userManager.Create(student2, "Default123#");
            userManager.Create(student3, "Default123#");
            userManager.Create(student4, "Default123#");
            userManager.Create(student5, "Default123#");
            userManager.Create(student6, "Default123#");
            userManager.Create(student7, "Default123#");
            userManager.Create(student8, "Default123#");
            userManager.Create(student9, "Default123#");

            userManager.Create(teacher1, "TeacherPwd123#");


            var roleStore = new RoleStore<IdentityRole>(context);
            var roleManager = new RoleManager<IdentityRole>(roleStore);


            if (!context.Roles.Any(r => r.Name == "Teacher"))
            {
                roleManager.Create(new IdentityRole("Teacher"));
                userManager.AddToRole(teacher1.Id, "Teacher");
            }

            var groupOne = context.Groups.Find(group1.Id);

            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(student1.Id));
            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(student2.Id));
            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(student3.Id));
            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(student4.Id));
            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(student5.Id));
            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(student6.Id));
            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(student7.Id));
            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(student8.Id));
            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(student9.Id));

            context.Groups.Find(group1.Id).Participants.Add(context.Users.Find(teacher1.Id));

            context.Courses.AddOrUpdate(
                c => c.Subject,
                new Course
                {
                    Subject = "English",
                    Level = "6",
                    GroupId = group1.Id,
                    Description = "Advanced English",
                    Teachers = new List<ApplicationUser>
                    {
                        context.Users.Find(teacher1.Id)
                    }
                }
            );
        }
    }
}
