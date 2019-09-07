using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ImagesController : ApiController
    {
        private readonly CloudBlobContainer cloudBlobContainer;
        
        public ImagesController()
        {
            cloudBlobContainer = BlopStorage.CloudBlobContainer;
        }

        // GET api/images
        public async Task<IHttpActionResult> Get()
        {
            List<IListBlobItem> images = new List<IListBlobItem>();
            if (!cloudBlobContainer.Exists())
            {
                await cloudBlobContainer.CreateAsync();
                BlobContainerPermissions permissions = new BlobContainerPermissions
                {
                    PublicAccess = BlobContainerPublicAccessType.Blob
                };
                await cloudBlobContainer.SetPermissionsAsync(permissions);
            }
            BlobContinuationToken blobContinuationToken = null;
            do
            {
                var results = await cloudBlobContainer.ListBlobsSegmentedAsync(null, blobContinuationToken);
                blobContinuationToken = results.ContinuationToken;
                foreach (IListBlobItem item in results.Results)
                {
                    images.Add(item);
                }
            } while (blobContinuationToken != null);
            return Ok(images);
        }
       
        // POST api/images
        public async Task<IHttpActionResult> Post()
        {
            HttpPostedFile image = HttpContext.Current.Request.Files.Count > 0 ? HttpContext.Current.Request.Files[0] : null;
            if (image == null) return BadRequest();
            if (!cloudBlobContainer.Exists())
            {
                await cloudBlobContainer.CreateAsync();
                BlobContainerPermissions permissions = new BlobContainerPermissions
                {
                    PublicAccess = BlobContainerPublicAccessType.Blob
                };
                await cloudBlobContainer.SetPermissionsAsync(permissions);
            }
            string imageName = image.FileName;
            CloudBlockBlob cloudBlockBlob = cloudBlobContainer.GetBlockBlobReference(imageName);
            await cloudBlockBlob.UploadFromStreamAsync(image.InputStream);
            return Ok(cloudBlockBlob);
        }

        // DELETE api/images/image.png
        public async Task<IHttpActionResult> Delete(string imageName)
        {
            CloudBlockBlob cloudBlockBlob = cloudBlobContainer.GetBlockBlobReference(imageName);
            await cloudBlockBlob.DeleteIfExistsAsync();
            return Ok();
        }

        // GET api/images/image.png
        public IHttpActionResult Get(string imageName)
        {
            CloudBlockBlob cloudBlockBlob = cloudBlobContainer.GetBlockBlobReference(imageName);
            if (!cloudBlockBlob.Exists()) return BadRequest();
            return Ok(cloudBlockBlob);
        }
    }
}
