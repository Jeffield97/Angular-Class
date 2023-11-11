import { Component } from '@angular/core';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})
export class ListContainerComponent {
  // Properties
  name: string = "Jeffield"
  lastname: string = "Fullbuster"
  age: number = 26
  btn_disable: boolean = true
  message:string = "Any person was be added"
  title:string = "Engineer"
  showing:boolean = false
  //Functions
  addTask():void {
    this.message= "Task added successfully"
  }
  changeTitle(e:Event): void{
    this.title=(<HTMLInputElement>e.target).value
  }
  changeShowing(): void{
    console.log("changing to ",this.showing)
    this.showing=!this.showing
  }
}
