import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LifeTimeComponent} from './life-time/life-time.component';


const routes : Routes = [
  {
    path : 'timeLife', component: LifeTimeComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
