using System.Web.Mvc;
using Tungsten.DataAccessLayer;
using Tungsten.Repositories;

namespace Tungsten.Controllers
{
    public class FileHandlerController : Controller
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        //
        // GET: /FileHandler/
        public ActionResult Index()
        {
            var files = db.FilePaths;
            return View(files);
        }
    }
}