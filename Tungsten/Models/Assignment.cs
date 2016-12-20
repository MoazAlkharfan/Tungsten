using System;

namespace Tungsten.Models
{
    public class Assignment : Entity<string>, DescribedSection
    {
        public string Id { get; set; } = Guid.NewGuid().ToString();
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime EndTime { get; set; }
    }
}