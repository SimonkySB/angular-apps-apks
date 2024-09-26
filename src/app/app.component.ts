import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {

  title = 'angular-quickstart';

  descargarApk() {
    const fileUrl = 'assets/app-release.apk';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'mi-aplicacion.apk';
    link.click();
  }
}
