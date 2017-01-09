using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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

        public async Task<bool> AddUserToGroup(string userid, string groupid) {

            try
            {
                var user = db.Users.Find(userid);
                Group group = await db.Groups.FindAsync(groupid);//db.Groups.Where(g => g.Id == groupid).FirstOrDefault();
                
                int oldgrouplength = user.Groups.Count();

                if (!user.Groups.Contains(group))
                {
                    user.Groups.Add(group);
                    await db.SaveChangesAsync();
                }
                
                if (oldgrouplength != user.Groups.Count())
                    return true;

                return false;
            }
            catch
            {
                return false;
            }
        }

        public async Task<bool> RemoveUserFromGroup(string userid, string groupid)
        {
            try
            {
                var user = db.Users.Find(userid);
                Group group = await db.Groups.FindAsync(groupid);
                int oldgrouplength = user.Groups.Count();

                if (user.Groups.Contains(group))
                {
                    user.Groups.Remove(group);
                    await db.SaveChangesAsync();
                }

                if (oldgrouplength != user.Groups.Count())
                    return true;

                return false;
            }
            catch
            {
                return false;
            }
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

        public bool EditGroup(Group NewGroup)
        {
            try
            {
                Group old = db.Groups.Find(NewGroup.Id);
                old.Name = NewGroup.Name;
                old.Description = NewGroup.Description;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool EditCourse(Course NewCourse)
        {
            try
            {
                Course old = db.Courses.Find(NewCourse.Id);
                old = NewCourse;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool EditSegment(Segment NewSegment)
        {
            try
            {
                Segment old = db.Segments.Find(NewSegment.Id);
                old = NewSegment;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool EditAssignment(Assignment NewAssignment)
        {
            try
            {
                Assignment old = db.Assignments.Find(NewAssignment.Id);
                old = NewAssignment;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool EditLesson(Lesson NewLesson)
        {
            try
            {
                Lesson old = db.Lessons.Find(NewLesson.Id);
                old = NewLesson;
                db.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}