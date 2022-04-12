import { Component, OnInit } from '@angular/core';
import {Song} from '../model/song';
import {SongServiceService} from '../service/song-service.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  playlist: Song[] = [];

  constructor(
    private songService: SongServiceService,



  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.playlist = this.songService.playlist;
  }
}
