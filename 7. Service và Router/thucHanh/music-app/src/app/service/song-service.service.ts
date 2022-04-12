import { Injectable } from '@angular/core';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {
  playlist: Song[] = [
    {
      id: 1,
      name: 'Justin Bieber - BaBy'
    },
    {
      id: 2,
      name: 'One Direction -  Night Changes'
    },
    {
      id: 3,
      name: 'MIN - Cà Phê'
    },
    {
      id: 4,
      name: 'LowG - Nhát gái 808'
    },
    {
      id: 5,
      name: 'Sơn Tùng M-TP - Em của ngày hôm qua'
    }
  ]
  constructor() { }

  findSongById(id: string){
    return this.playlist.find(item => item.id === id);
  }
}
