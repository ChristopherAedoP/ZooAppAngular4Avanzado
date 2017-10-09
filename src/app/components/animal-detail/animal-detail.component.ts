import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { fadeIn } from './../../components/animation';

import { GLOBAL } from './../../services/global';

import { Animal } from './../../models/animal';
import { AnimalService } from './../../services/animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService],
  animations: [fadeIn]
})
export class AnimalDetailComponent implements OnInit {

  public title: String;
  public animal: Animal;
  public url;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _as: AnimalService
  ) {
    this.title = 'Añadir';
    this.url = GLOBAL.urlAPI;
    this.animal = null;
  }

  ngOnInit() {

    this.getAnimal();
  }

  getAnimal() {
    this._route.params.forEach((params: Params ) => {
      let id = params['id'];

      this._as.getAnimal(id).subscribe(
        response => {
          console.log('response', response);

          if (response.animal) {
            this.animal = response.animal;
          } else {
            this._router.navigate(['/']);
          }
        },
        error => {
          console.error(<any>error);
        }
      );
    });
  }
}
