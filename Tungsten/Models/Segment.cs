using System;
using System.Collections.Generic;

namespace Tungsten.Models
{
    public class Segment : Entity<string>, DescribedSection
    {
        public Segment()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual ICollection<Assignment> Assignments { get; set; }
    }
}