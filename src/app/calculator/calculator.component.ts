import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  //Properties
  firstValue:number =0
  secondValue: number = 0
  resultado: number = 0

  
  //Functions
  addition(): void{
    this.resultado = this.firstValue + this.secondValue;
  }
}
