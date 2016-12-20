using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tungsten.Models
{
    public class Segment : Entity<string>, DescribedSection
    {
        public Segment()
        {
            Id = Guid.NewGuid().ToString();
        }

        [Key]
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        
        [Required, ForeignKey("Course")]
        public string CourseId { get; set; }
        public Course Course { get; set; }

        public virtual ICollection<Assignment> Assignments { get; set; }
    }
}