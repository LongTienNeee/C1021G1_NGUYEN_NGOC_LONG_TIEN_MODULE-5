import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input()
  backgroundColor: string = '#D9D9D9';

  @Input()
  progressColor: string = '#4CAF50';

  @Input()
  progress: number = 0 ;
  constructor() { }

  ngOnInit(): void {
  }

  // loading() {
  //   let interval = setInterval(() => {
  //     this.progress = +this.progress + 5;
  //     if (this.progress == 100) {
  //       clearInterval(interval);
  //     }
  //   }, 1000);
  // }


  click() {
      this.progress = ++this.progress + 5;
      }


}
