import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

import { Animal } from './../../models/animal';
import { AnimalService } from './../../services/animal.service';
import { GLOBAL } from './../../services/global';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  animations: [ fadeIn ],
  providers: [AnimalService]
})
export class AnimalsComponent implements OnInit {

  public title: String;
  public animals: Animal[];
  public url;

  constructor(
    public _as: AnimalService
  ) {

    this.title = 'Listado de animales';
    this.url = GLOBAL.urlAPI;


  }

  ngOnInit() {
    this.getAnimals();
  }
  getAnimals() {
    this._as.getAnimals().subscribe(
      response => {
        if (response.animals) {
          this.animals = response.animals;
        } else {

        }

      },
      error => {
        console.error(<any>error);
      }

    );
  }
}
