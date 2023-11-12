import { Component, Input } from '@angular/core';
import { Person } from '../Model/person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent {
  @Input() person: Person = new Person('a', 'b', 2);
  @Input() index: number = 0;
}
