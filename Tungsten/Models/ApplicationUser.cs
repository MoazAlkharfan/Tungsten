using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;
using Newtonsoft.Json;

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

        [JsonIgnore]
        public override string PasswordHash
        {
            get
            {
                return base.PasswordHash;
            }

            set
            {
                base.PasswordHash = value;
            }
        }
    }
}