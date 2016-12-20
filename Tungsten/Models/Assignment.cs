using System;

namespace Tungsten.Models
{
    public class Assignment : Entity<string>, DescribedSection
    {
        public Assignment()
        {
            Id = Guid.NewGuid().ToString();
        }

        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime EndTime { get; set; }
    }
}