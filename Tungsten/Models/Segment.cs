using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tungsten.Models
{
    public class Segment : Entity<string>
    {
        public Segment()
        {
            Id = Guid.NewGuid().ToString();
        }

        [Key]
        public string Id { get; set; }
        [Display(Name = "Namn")]
        public string Name { get; set; }
        [Display(Name = "Beskrivning")]
        public string Description { get; set; }
        
        [Required, ForeignKey("Course")]
        public string CourseId { get; set; }
        public Course Course { get; set; }

        public virtual ICollection<Assignment> Assignments { get; set; }
    }
}