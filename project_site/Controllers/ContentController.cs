using Microsoft.AspNetCore.Mvc;

namespace project_site.Controllers
{
    public class ContentController : Controller
    {
        public IActionResult MainPage()
        {

            return View();
        }

    }
}
