import { Component, OnInit } from '@angular/core';
import {Student} from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student =  {
    id: 1,
    name : 'Tiên',
    age: 20,
    country: 'Danang'
};

  constructor() { }

  ngOnInit(): void {
  }
  changeName(name){}
}
