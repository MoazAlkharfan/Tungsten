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
        bool CreateGroup(Group group);
        bool CreateCourse(Course course);
        bool CreateSegment(Segment segment);
        bool CreateAssignment(Assignment assignment);
        bool CreateLesson(Lesson lesson);

        // Delete
        bool RemoveGroup(Group group);
        bool RemoveCourse(Course course);
        bool RemoveSegment(Segment segment);
        bool RemoveAssignment(Assignment assignment);
        bool RemoveLesson(Lesson lesson);

        // Update
        bool EditGroup(Group NewGroup);
        bool EditCourse(Course NewCourse);
        bool EditSegment(Segment NewSegment);
        bool EditAssignment(Assignment NewAssignment);
        bool EditLesson(Lesson NewLesson);

        // Get
        Group FindGroup(string id);
        IEnumerable<Group> GetGroups();

        Course FindCourse(string id);

        Task<bool> AddUserToGroup(string userid, string groupid);
    }
}
