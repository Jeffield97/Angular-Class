import { Component } from '@angular/core';
import { Person } from '../Model/person.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  title: string = 'Listado de personas';
  persons: Person[] = [
    new Person('Jeffield', 'Fullbuster', 26),
    new Person('Jake', 'Maiky', 23),
    new Person('Sheffield', 'Leriat', 24),
    new Person('Vale', 'Myers', 18),
  ];
  inputName: string = '';
  inputLastname: string = '';
  inputAge: number = 0;

  //Functions
  addPerson(): void {
    let person = new Person(this.inputName, this.inputLastname, this.inputAge);
    this.persons.push(person);
  }
}
