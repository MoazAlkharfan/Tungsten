using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tungsten.Models.FileSystem
{
    public class Settings
    {
        public static string RootDirectory { get; } = "~/App_Data/FileRepository/";

        public static string AssignmentPath { get; } = "Assignments/";

        public const int PriorityDefault                     = 0x00000000;
        public const int PriorityTeacher                     = 0x00001000;
        public const int PriorityAdministrator               = 0x0FFFFFFF;
    }
}