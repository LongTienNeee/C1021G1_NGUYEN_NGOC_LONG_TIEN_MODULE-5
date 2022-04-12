import { Injectable } from '@angular/core';
import {Iword} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  listWord: Iword[] = [
    {
      word: "dog",
      mean: "Con chó"
    },
    {
      word: "pig",
      mean: "Con Heo"
    },
    {
      word: "cat",
      mean: "Con mèo"
    },
    {
      word: "rabbit",
      mean: "Con thỏ"
    },
    {
      word: "fish",
      mean: "Con cá"
    }

  ]

  constructor() { }
  translate(word: string){

    for(let i in this.listWord){
      if(word === this.listWord[i].word){
          return this.listWord[i].mean;
      }
    }
  }

}
