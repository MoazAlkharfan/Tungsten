using System.IO;
using System.Linq;
using Tungsten.DataAccessLayer;

namespace Tungsten.Models.FileSystem
{
    public static class HelperMethods
    {
        private static ApplicationDbContext db = new ApplicationDbContext();

        public static string GeneratePath(ApplicationUser appUser, int mode = -1)
        {
            return Path.Combine(Settings.RootDirectory, appUser.CurrentGroup.ToString(), (mode >= 0) ? Settings.Paths.Values.ElementAt(mode) : "");
        }
    }
}