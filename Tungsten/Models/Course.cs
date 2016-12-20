using System;
using System.Collections.Generic;

namespace Tungsten.Models
{
    public class Course : Entity<string>, DescribedSection
    {
        public Course()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Segment> Segments { get; set; }
        public virtual ICollection<ApplicationUser> Teachers { get; set; }
        public virtual ICollection<Lesson> Lessons { get; set; }
    }
}