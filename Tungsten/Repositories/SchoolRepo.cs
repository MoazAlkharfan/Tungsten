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

        public bool CreateSegment(Segment segment)
        {
            try
            {
                db.Segments.Add(segment);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool CreateAssignment(Assignment assignment)
        {
            try
            {
                db.Assignments.Add(assignment);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool CreateLesson(Lesson lesson)
        {
            try
            {
                db.Lessons.Add(lesson);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool RemoveGroup(Group group)
        {
            try
            {
                db.Groups.Remove(group);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool RemoveCourse(Course course)
        {
            try
            {
                db.Courses.Remove(course);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool RemoveSegment(Segment segment)
        {
            try
            {
                db.Segments.Remove(segment);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool RemoveAssignment(Assignment assignment)
        {
            try
            {
                db.Assignments.Remove(assignment);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool RemoveLesson(Lesson lesson)
        {
            try
            {
                db.Lessons.Remove(lesson);
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
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