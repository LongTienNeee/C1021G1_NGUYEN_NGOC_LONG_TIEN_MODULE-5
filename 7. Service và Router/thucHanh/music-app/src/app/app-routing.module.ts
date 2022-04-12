
import { Routes, RouterModule } from '@angular/router';
import {SongComponent} from './song/song.component';
import {NgModule} from '@angular/core';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {Song} from './model/song';


const routes: Routes = [
  {path : 'song', component:SongComponent},
  {path: 'youtube', component: SongComponent,
  children: [{
    path: 'id',
    component: YoutubePlayerComponent
  }]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
