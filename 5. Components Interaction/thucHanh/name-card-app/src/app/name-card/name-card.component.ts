import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
  @Input()
  cardName: string = 'Nguyễn Ngọc Long  Tiên';

  @Input()
  cardEmail: string = "H2so4allii@gnmail.com";

  @Input()
  cardPhone: string = '0913575135';

  constructor() { }

  ngOnInit(): void {
  }

}
