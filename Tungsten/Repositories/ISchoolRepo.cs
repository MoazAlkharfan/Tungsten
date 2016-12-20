using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tungsten.Repositories
{
    public interface ISchoolRepo
    {
        // Create
        void CreateGroup();
        void CreateCourse();
        void CreateSegment();
        void CreateAssignment();
        void CreateLesson();

        // Delete
        void RemoveGroup();
        void RemoveCourse();
        void RemoveSegment();
        void RemoveAssignment();
        void RemoveLesson();

        // Update
        void EditGroup();
        void EditCourse();
        void EditSegment();
        void EditAssignment();
        void EditLesson();

        // Get
    }
}
