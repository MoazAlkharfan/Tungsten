using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tungsten.Models
{
    public class Assignment : Entity<string>, DescribedSection
    {
        public Assignment()
        {
            Id = Guid.NewGuid().ToString();
        }

        [Key]
        public string Id { get; set; }

        [Required, ForeignKey("Segment")]
        public string SegmentId { get; set; }
        public Segment Segment { get; set; }

        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime EndTime { get; set; }
    }
}