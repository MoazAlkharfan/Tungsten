using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tungsten.Models.FileSystem
{
    public class FileDetail
    {
        [Key]
        public Guid Id { get; set; }
        [Required, StringLength(255)]
        public string FileName { get; set; }
        public string Extension { get; set; }
        [Required]
        public DateTime UploadTime { get; set; }
        [Required, ForeignKey("Owner")]
        public string OwnerId { get; set; }

        public virtual ApplicationUser Owner { get; set; }
    }
}