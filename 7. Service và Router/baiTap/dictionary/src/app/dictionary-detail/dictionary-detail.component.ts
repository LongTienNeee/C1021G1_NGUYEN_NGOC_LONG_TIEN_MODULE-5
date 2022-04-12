import { Component, OnInit } from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  constructor(private service: DictionaryService) { }

  mean: string;


  ngOnInit(): void {
  }
  translate(word: string) {
    this.mean = this.service.translate(word);
  }

}
