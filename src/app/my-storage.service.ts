import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class MyStorageService {
  public data = [];
  constructor() { }

  public async initialize() {
    const { value } = await Storage.get({ key: 'tasks' });
    if (value) { 
      this.data = JSON.parse(value) 
    };
    console.log(this.data);
  }

  public addTask(task: any) {
    this.data.push(task);
    //sort this.data using date and time, which is earlier goes up
    this.data.sort( 
      (a,b) => {
        const dateA = new Date(a.itemDueDate + ' ' + a.itemDueTime);
        const dateB = new Date(b.itemDueDate + ' ' + b.itemDueTime);
        return dateA.getTime() - dateB.getTime();
      }
    );
    const dataString = JSON.stringify(this.data);
    Storage.set({
      key: 'tasks',
      value: dataString,
    });

  }

  delete(index) {
    this.data.splice(index, 1);
    const dataString = JSON.stringify(this.data);
    Storage.set({
      key: 'tasks',
      value: dataString,
    });
  }

}
