using Microsoft.AspNetCore.Components.Forms;
using Microsoft.AspNetCore.Mvc;

public class RegisterController : Controller
{
    public IActionResult Logreg()
    {
        InputText InputUsername;

        return View();
    }

    public IActionResult SignUp()
    {

        return View();
    }


}
