using System.Collections.Generic;

namespace Tungsten.Models.FileSystem
{
    public class Settings
    {
        public static string RootDirectory { get; } = "~/App_Data/FileRepository/";

        public static Dictionary<string, string> Paths { get; set; }

        public const int PriorityDefault                     =  0x00000000;
        public const int PriorityTeacher                     =  0x00001000;
        public const int PriorityAdministrator               =  0x0FFFFFFF;

        public Settings()
        {
            Paths = new Dictionary<string, string>();
            Paths.Add("SharedPath", "Shared/");
            Paths.Add("AssignmentPath", "Assignments/");
        }
    }
}