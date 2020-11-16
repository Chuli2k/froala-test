using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace froala_file_upload.Froala
{
    /// <summary>
    /// File Options used for uploading.
    /// </summary>
    public class FileOptions
    {
        public static string FieldnameDefault = "file";

        /// <summary>
        /// Tag name that points to the file.
        /// </summary>
        public string Fieldname { get; set; }

        /// <summary>
        /// File validation.
        /// </summary>
        public FileValidation Validation { get; set; }

        /// <summary>
        /// Init default file upload settings.
        /// </summary>
        protected virtual void initDefault()
        {
            Validation = new FileValidation();
        }

        /// <summary>
        /// Constructor.
        /// </summary>
        public FileOptions()
        {
            // Set default fieldname.
            Fieldname = FieldnameDefault;

            // Init default settings.
            initDefault();
        }
    }
}
