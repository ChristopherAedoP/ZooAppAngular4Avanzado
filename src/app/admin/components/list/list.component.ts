import { fadeLateral } from './../../animation';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { fadeIn } from './../../../components/animation';

import { UploadService } from './../../../services/upload.service';
import { GLOBAL } from './../../../services/global';
import { User } from '../../../models/user';

import { Animal } from './../../../models/animal';
import { AnimalService } from './../../../services/animal.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [AnimalService, UserService],
  animations: [fadeLateral]
})
export class ListComponent implements OnInit {

  numbers= new Array(10);
  public title: String;
  public animals: Animal[];
  public user: User;
  public identity;
  public token;
  public url;
  public mensaje: String = null;
  public status: Boolean = false;
  public files_to_upload: Array<File>;

  public id_animal_delete;

  public busqueda;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _as: AnimalService,
    public _us: UserService
  ) {

    this.title = 'Listado de animales';
    this.url = GLOBAL.urlAPI;

    this.token = this._us.getToken();

  }

  ngOnInit() {

    this.getAnimals();

    $('#myModal').on('show.bs.modal',   (event) => {

      let button = $(event.relatedTarget);

      let animalname = button.data('animalname');
      this.id_animal_delete = button.data('animalid');

      $('.animalname').text(animalname);

    });
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
  deleteAnimals() {

    this._as.deleteAnimal(this.token, this.id_animal_delete).subscribe(
      response => {
        if (response.animal) {
          this.getAnimals();
        } else {
          alert('Error eliminar animal');
        }

      },
      error => {
        console.error(<any>error);
        alert('Error en el servidor');
      }

    );
  }
}
