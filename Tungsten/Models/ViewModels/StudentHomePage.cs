using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tungsten.Models.ViewModels
{
    public class StudentHomePage
    {
        public IEnumerable<Assignment> Assignments;
        public IEnumerable<ScheduleSegment> Schedule;
        public IEnumerable<Course> Courses;
    }
}