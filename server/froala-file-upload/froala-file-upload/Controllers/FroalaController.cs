using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace froala_file_upload.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FroalaController : ControllerBase
    {
        private readonly ILogger<FroalaController> _logger;

        public FroalaController(ILogger<FroalaController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("upload")]
        public IActionResult Upload()
        {
            //var tmp = this.HttpContext;
            //return new OkObjectResult(new { link = "some-file-link" });

            string uploadPath = "/Public/";

            try
            {
                // return Json(Froala.File.Upload(HttpContext, uploadPath));
                var opt = new Froala.FileOptions();
                opt.Validation = new Froala.FileValidation(
                    new string[] { "txt", "pdf", "doc", "log" },
                    new string[] { "text/plain", "application/msword", "application/x-pdf", "application/pdf", "application/octet-stream" }
                    );
                return new OkObjectResult(Froala.File.Upload(HttpContext, uploadPath, opt));
            }
            catch (Exception e)
            {
                // return Json(e);

                //TODO: return 500 http error
                return new OkObjectResult(e);
            }
        }

        [HttpGet]
        [Route("test")]
        public IActionResult Test()
        {
            return Ok();
        }
    }
}
