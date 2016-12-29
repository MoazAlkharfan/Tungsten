using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tungsten.Models.FileSystem
{
    public class FileRepository
    {
        public ICollection<FileDetail> Contents { get; set; }
    }
}