import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MyStorageService } from './my-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform, public myStorage: MyStorageService) {
    this.platform.ready().then(() => {
      this.myStorage.initialize();
    });
  }
}

