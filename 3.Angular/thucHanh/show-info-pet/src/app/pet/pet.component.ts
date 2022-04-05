import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name : 'Tuyết',
    image : 'https://thocanh.com/wp-content/uploads/2019/04/IMG_6019-scaled.jpg'
  };

  constructor() { }

  ngOnInit(): void {
  }
  changeNamePet(name){
    this.pet.name = name;
  }
  changeImagePet(image: string){
    this.pet.image = image;
  }

}
