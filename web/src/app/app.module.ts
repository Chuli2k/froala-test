import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FroalaEditorDirective, FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// All plugins
// import 'froala-editor/js/plugins.pkgd.min.js';

// File upload plugin
import 'froala-editor/js/plugins/file.min.js';

// import 'froala-editor/js/froala_editor.min.js';
// import 'froala-editor/js/plugins/align.min.js';
// import 'froala-editor/js/plugins/char_counter.min.js';
// import 'froala-editor/js/plugins/code_beautifier.min.js';
// import 'froala-editor/js/plugins/colors.min.js';
// import 'froala-editor/js/plugins/emoticons.min.js';
// import 'froala-editor/js/plugins/font_size.min.js';
// import 'froala-editor/js/plugins/fullscreen.min';
// import 'froala-editor/js/plugins/image.min.js';
// import 'froala-editor/js/plugins/link.min.js';
// import 'froala-editor/js/plugins/lists.min.js';
// import 'froala-editor/js/plugins/paragraph_format.min.js';
// import 'froala-editor/js/plugins/quick_insert.min.js';
// import 'froala-editor/js/plugins/url.min.js';
// import 'froala-editor/js/plugins/video.min.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [FroalaEditorDirective]
})
export class AppModule { }
