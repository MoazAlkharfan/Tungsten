using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tungsten.Models
{
    public class Group : Entity<string>, DescribedSection
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<ApplicationUser> Mentors { get; set; }
        public virtual ICollection<ApplicationUser> Stundents { get; set; }
        public virtual ICollection<Course> Courses { get; set; }
    }
}