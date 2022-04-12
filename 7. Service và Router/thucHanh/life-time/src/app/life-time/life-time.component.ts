import { Component, OnInit } from '@angular/core';
import {DateUtilService} from '../service/date-util.service';

@Component({
  selector: 'app-life-time',
  templateUrl: './life-time.component.html',
  styleUrls: ['./life-time.component.css']
})
export class LifeTimeComponent implements OnInit {
  output = ""  ;

  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }

  onChange(value: string) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
