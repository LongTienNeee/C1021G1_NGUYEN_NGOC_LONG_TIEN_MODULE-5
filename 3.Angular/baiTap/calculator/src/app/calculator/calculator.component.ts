import {Component, OnInit} from '@angular/core';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  totalCal: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculate(operate: string) {
    switch (operate) {
      case '+' :
        this.totalCal = this.number1 + this.number2;
        break;
      case '-':
        this.totalCal = this.number1 - this.number2;
        break;
      case '*':
        this.totalCal = this.number1 * this.number2;
        break;
      case '/':
        this.totalCal = this.number1 / this.number2;
        break;
      default :
        this.totalCal = 0;
    }
  }
  changeNumber1(number1: string) {
    this.number1 = parseInt(number1);
  }
  changeNumber2(number2: string){
    this.number2 = parseInt(number2);
  }


}
