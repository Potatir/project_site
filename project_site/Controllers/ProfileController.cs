using Microsoft.AspNetCore.Mvc;

namespace project_site.Controllers
{
    public class ProfileController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
