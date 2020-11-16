import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'froala-test';

  options =  {
    // Set the file upload parameter.
    // fileUploadParam: 'file_param',

    // Set the file upload URL.
    fileUploadURL: 'http://localhost:61114/Froala/Upload',

    // Additional upload params.
    fileUploadParams: {id: 'my_editor'},

    // Set request type.
    fileUploadMethod: 'POST',

    // Set max file size to 20MB.
    fileMaxSize: 20 * 1024 * 1024,

    // Allow to upload any file.
    fileAllowedTypes: ['*'],

    events: {
      'file.beforeUpload': (files) => {
        // Return false if you want to stop the file upload.
        console.log('file.beforeUpload', files);
        return true;
      },
      'file.uploaded': (response) => {
        // File was uploaded to the server.
        console.log('file.uploaded', response);
      },
      'file.inserted': ($file, response) => {
        // File was inserted in the editor.
        console.log('file.inserted');
      },
      'file.error': (error, response) => {
        console.error('file.error', error);
        // Bad link.
        // if (error.code == 1) { ... }

        // No link in upload response.
        // else if (error.code == 2) { ... }

        // Error during file upload.
        // else if (error.code == 3) { ... }

        // Parsing response failed.
        // else if (error.code == 4) { ... }

        // File too text-large.
        // else if (error.code == 5) { ... }

        // Invalid file type.
        // else if (error.code == 6) { ... }

        // File can be uploaded only to same domain in IE 8 and IE 9.
        // else if (error.code == 7) { ... }

        // Response contains the original server response to the request if available.
      }
    }
  };

  editorContent: any;
}
