using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public static class BlopStorage
    {
        private static readonly string StorageConnectionString;
        public static CloudBlobContainer CloudBlobContainer { get; set; }

        static BlopStorage()
        {
            StorageConnectionString = "DefaultEndpointsProtocol=https;AccountName=fgtest4;AccountKey=0Bef5eAphoMwDudqJJaqjutHheHiA7q/chwVreoY506cZgjKG6sJss/c9PhFW/QcDGR6DA/+j63/f/6IRMCTXQ==;EndpointSuffix=core.windows.net";
            CloudStorageAccount storageAccount;
            if (CloudStorageAccount.TryParse(StorageConnectionString, out storageAccount))
            {
                CloudBlobClient cloudBlobClient = storageAccount.CreateCloudBlobClient();
                CloudBlobContainer = cloudBlobClient.GetContainerReference("images");
            }
            else
            {
                throw new Exception("Connection String is not valid");
            }
        }

    }
}