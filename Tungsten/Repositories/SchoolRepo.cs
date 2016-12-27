using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tungsten.DataAccessLayer;
using Tungsten.Models;

namespace Tungsten.Repositories
{
    public class SchoolRepo : ISchoolRepo
    {
        public ISchoolContext db;

        public SchoolRepo(ISchoolContext repo)
        {
            db = repo;
        }

        public SchoolRepo()
        {
            db = new ApplicationDbContext();
        }

        public IEnumerable<Group> GetGroups()
        {
            return db.Groups;
        }

        public Group FindGroup(string id)
        {
            return db.Groups.FirstOrDefault(g => g.Id == id);
        }

        public Course FindCourse(string id)
        {
            return db.Courses.FirstOrDefault(c => c.Id == id);
        }

        public bool CreateGroup(Group group)
        {
            try
            {
                db.Groups.Add(group);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
            
        }

        public bool CreateCourse(Course course)
        {
            try
            {
                db.Courses.Add(course);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public void CreateSegment(Segment segment)
        {
            db.Segments.Add(segment);
            db.SaveChanges();
        }

        public void CreateAssignment(Assignment assignment)
        {
            db.Assignments.Add(assignment);
            db.SaveChanges();
        }

        public void CreateLesson(Lesson lesson)
        {
            db.Lessons.Add(lesson);
            db.SaveChanges();
        }

        public void RemoveGroup(Group group)
        {
            db.Groups.Remove(group);
            db.SaveChanges();
        }

        public void RemoveCourse(Course course)
        {
            db.Courses.Remove(course);
            db.SaveChanges();
        }

        public void RemoveSegment(Segment segment)
        {
            db.Segments.Remove(segment);
            db.SaveChanges();
        }

        public void RemoveAssignment(Assignment assignment)
        {
            db.Assignments.Remove(assignment);
            db.SaveChanges();
        }

        public void RemoveLesson(Lesson lesson)
        {
            db.Lessons.Remove(lesson);
            db.SaveChanges();
        }

        public void EditGroup(Group NewGroup)
        {
            Group old = db.Groups.Find(NewGroup.Id);
            old = NewGroup;
            db.SaveChanges();
        }

        public void EditCourse(Course NewCourse)
        {
            Course old = db.Courses.Find(NewCourse.Id);
            old = NewCourse;
            db.SaveChanges();
        }

        public void EditSegment(Segment NewSegment)
        {
            Segment old = db.Segments.Find(NewSegment.Id);
            old = NewSegment;
            db.SaveChanges();
        }

        public void EditAssignment(Assignment NewAssignment)
        {
            Assignment old = db.Assignments.Find(NewAssignment.Id);
            old = NewAssignment;
            db.SaveChanges();
        }

        public void EditLesson(Lesson NewLesson)
        {
            Lesson old = db.Lessons.Find(NewLesson.Id);
            old = NewLesson;
            db.SaveChanges();
        }
    }
}