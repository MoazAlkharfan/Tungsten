using System;

namespace Tungsten.Models
{
    public class Lesson : Entity<string>
    {
        public Lesson()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
        public DateTime Time { get; set; }
        public string Classroom { get; set; }
    }
}