import { Component } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent {
  name: string = "Jeffield"
  lastname: string = "Fullbuster"
  age: number = 26
  btn_disable: boolean = true
  message = "Any person was be added"
  addTask():void {
    this.message= "Task added successfully"
  }
}
