using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebChatApp.Controllers
{
	[Route("[controller]")]
	[ApiController]
	[Produces("application/json", "application/xml")]
	public class ValuesController : ControllerBase
	{
		const string anonimo = "Bem vindo anônimo";

		[Route("anonimo")]
		[HttpGet]
		public IActionResult Anonimo() => StatusCode( 200, new { anonimo });

		[Route("status")]
		[HttpGet]
		public IActionResult Status() => StatusCode( 200, new { status = "ativado" });
	}
}
