import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categories = ['work', 'sport', 'housework', 'study'];

  public taskName: any;
  public taskDate: any;
  public taskTime: any;
  public taskPriority: any;
  public taskCategory: any;

  taskObject   //has everything 

  constructor(public modalCtrl:ModalController, public datepipe: DatePipe) {
    const now = new Date();
    this.taskDate = this.datepipe.transform(now,'yyyy-MM-dd');
    this.taskTime = this.datepipe.transform(now,'HH:mm');
  }

  ngOnInit() {
  }

  async dismiss() {   
    await this.modalCtrl.dismiss(this.taskObject);
  }

  selectedCategory(index){
    this.taskCategory = this.categories[index];
  }

  addTask() {
    this.taskObject = 
    ({itemName:this.taskName, 
      itemDueDate:this.taskDate, 
      itemDueTime: this.taskTime,
      itemPriority:this.taskPriority,
      itemCategory:this.taskCategory})
    this.dismiss();
  }

}
