using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tungsten.Models
{
    public class Lesson : Entity<string>
    {
        public Lesson()
        {
            Id = Guid.NewGuid().ToString();
        }

        [Key]
        public string Id { get; set; }
        
        [Required, ForeignKey("Course")]
        public string CourseId { get; set; }
        public Course Course { get; set; }

        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Classroom { get; set; }
    }
}