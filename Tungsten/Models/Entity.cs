using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tungsten.Models
{
    public interface Entity<TKey>
    {
         TKey Id { get; set; }
    }
}
