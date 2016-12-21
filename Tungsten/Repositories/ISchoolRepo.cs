using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tungsten.Models;

namespace Tungsten.Repositories
{
    public interface ISchoolRepo
    {
        // Create
        void CreateGroup(Group group);
        void CreateCourse(Course course);
        void CreateSegment(Segment segment);
        void CreateAssignment(Assignment assignment);
        void CreateLesson(Lesson lesson);

        // Delete
        void RemoveGroup(Group group);
        void RemoveCourse(Course course);
        void RemoveSegment(Segment segment);
        void RemoveAssignment(Assignment assignment);
        void RemoveLesson(Lesson lesson);

        // Update
        void EditGroup(Group NewGroup);
        void EditCourse(Course NewCourse);
        void EditSegment(Segment NewSegment);
        void EditAssignment(Assignment NewAssignment);
        void EditLesson(Lesson NewLesson);

        // Get
        Group FindGroup(string id);
    }
}
