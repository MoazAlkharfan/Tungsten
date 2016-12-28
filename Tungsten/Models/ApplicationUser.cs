using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using Newtonsoft.Json;
using System;
using System.Web.UI.WebControls;

namespace Tungsten.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {
        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }

        public string Name { get; set; }

        [RegularExpression("^([0-9]{6}([-+]).*)$")]
        public string SSN { get; set; }

        public string Address { get; set; }

        public virtual ICollection<Course> Courses { get; set; }
        public virtual ICollection<Group> Groups { get; set; }
        public virtual ICollection<FilePath> FilePaths { get; set; }

        [JsonIgnore]
        public override string PasswordHash
        {
            get { return base.PasswordHash; }
            set { base.PasswordHash = value; }
        }

        [JsonIgnore]
        public override ICollection<IdentityUserClaim> Claims
        {
            get { return base.Claims; }
        }

        [JsonIgnore]
        public override bool EmailConfirmed
        {
            get { return base.EmailConfirmed; }
            set { base.EmailConfirmed = value; }
        }

        [JsonIgnore]
        public override bool LockoutEnabled
        {
            get { return base.LockoutEnabled; }
            set { base.LockoutEnabled = value; }
        }

        [JsonIgnore]
        public override DateTime? LockoutEndDateUtc
        {
            get { return base.LockoutEndDateUtc; }
            set { base.LockoutEndDateUtc = value; }
        }

        [JsonIgnore]
        public override ICollection<IdentityUserLogin> Logins
        {
            get { return base.Logins; }
        }

        [JsonIgnore]
        public override bool PhoneNumberConfirmed
        {
            get { return base.PhoneNumberConfirmed; }
            set { base.PhoneNumberConfirmed = value; }
        }

        [JsonIgnore]
        public override string SecurityStamp
        {
            get { return base.SecurityStamp; }
            set { base.SecurityStamp = value; }
        }

        [JsonIgnore]
        public override bool TwoFactorEnabled
        {
            get { return base.TwoFactorEnabled; }
            set { base.TwoFactorEnabled = value; }
        }
    }
}