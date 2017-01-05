using System.Collections.Generic;
using System.Linq;
using Tungsten.DataAccessLayer;

namespace Tungsten.Models.FileSystem
{
    public static class HelperMethods
    {
        private static ApplicationDbContext db = new ApplicationDbContext();

        public static string GeneratePath(ApplicationUser appUser)
        {
            return Settings.RootDirectory + appUser.CurrentDirectory;
        }

        public static bool IsUserEligibleForPath(ApplicationUser appUser, string path)
        {
            bool result = false;
            List<Group> groups = appUser.Groups.ToList();

            foreach (var item in groups)
            {
                if (item.Id == path)
                {
                    result = true;
                    break;
                }
                else if (item.Id == path + Settings.AssignmentPath)
                {
                    result = true;
                    break;
                }
            }

            return result;
        }
    }
}