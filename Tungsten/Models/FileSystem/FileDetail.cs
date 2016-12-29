using System;
using System.ComponentModel.DataAnnotations;

namespace Tungsten.Models
{
    public class FileDetail
    {
        [Key]
        public Guid Id { get; set; }
        [Required, StringLength(255)]
        public string FileName { get; set; }
        public string Extension { get; set; }
        [Required]
        public ApplicationUser Owner { get; set; }
    }
}