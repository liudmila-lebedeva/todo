import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { MyStorageService } from '../my-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  

today : number = Date.now();

  constructor(public modalCtrl:ModalController, public myStorage: MyStorageService) {}


 async addTask() {
  const modal = await this.modalCtrl.create({
    component: AddNewTaskPage
  })

// modal.onWillDismiss 
modal.onDidDismiss().then(newTaskObj => {  //Returns a promise that resolves when the modal did dismiss.
  console.log(newTaskObj.data);
  this.myStorage.addTask(newTaskObj.data);
});   
  return await modal.present();
  }

delete(index) {
  this.myStorage.delete(index);
}

}
