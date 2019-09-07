using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Authorize]
    public class TruncateImagesController : ApiController
    {
        private readonly CloudBlobContainer cloudBlobContainer;

        public TruncateImagesController()
        {
            cloudBlobContainer = BlopStorage.CloudBlobContainer;
        }

        // DELETE api/truncateimages
        [HttpDelete]
        public  IHttpActionResult Delete()
        {
            cloudBlobContainer.DeleteIfExists();
            return Ok();
        }
    }
}
