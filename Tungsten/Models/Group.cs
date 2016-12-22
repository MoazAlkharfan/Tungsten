using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Tungsten.Models
{
    /// <summary>
    /// The Group class represents a collection of users, such as a class of students.
    /// </summary>
    public class Group : Entity<string>
    {
        /// <summary>
        /// Empty constructor sets the group's Id to a generated GUID
        /// </summary>
        public Group()
        {
            Id = Guid.NewGuid().ToString();
        }
        /// <summary>
        /// The Id-property is by default a GUID as string
        /// </summary>
        [Key]
        public string Id { get; set; }
        /// <summary>
        /// Name of the Group, e.g. "5B" for the B-class of year 5 students
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// The Description property can be used as a catch-all info field for the group.
        /// </summary>
        public string Description { get; set; }
        /// <summary>
        /// Navigational property for a Group's participating Users, both Teachers and Students
        /// </summary>
        public virtual ICollection<ApplicationUser> Participants { get; set; }
        /// <summary>
        /// Navigational property for a Group's Courses, e.g. English 1, Math 1, Math 2
        /// </summary>
        public virtual ICollection<Course> Courses { get; set; }
    }
}