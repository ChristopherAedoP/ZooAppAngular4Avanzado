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
  selector: 'app-edit',
  templateUrl: './../add/add.component.html',
  providers: [AnimalService, UserService, UploadService],
  animations: [fadeLateral]
})
export class EditComponent implements OnInit {
  public title: String;
  public animal: Animal;
  public user: User;
  public identity;
  public token;
  public url;
  public mensaje: String = null;
  public status: Boolean = false;
  public files_to_upload: Array<File>;
  public is_edit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _as: AnimalService,
    public _us: UserService,
    public _ups: UploadService
  ) {
    this.title = 'Editar';
    this.url = GLOBAL.urlAPI;

    this.token = this._us.getToken();
    this.is_edit = true;
  }

  ngOnInit() {
    this.getAnimal();


  }
  getAnimal() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._as.getAnimal(id).subscribe(
        response => {

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

  onSubmit() {
    this._as.editAnimal(this.token, this.animal._id, this.animal)
      .subscribe(
      response => {
        if (response.animal) {

          this.animal = response.animal;
          this.mensaje = 'Animal actualizado.';
          this.status = true;

          if (this.files_to_upload) {

            this._ups.makeFileRequest(this.url + 'upload-image-animal/' + this.animal._id, [], this.files_to_upload, this.token, 'image')
              .then((result: any) => {
                this.animal.image = result.image;
              });
          }

          this._router.navigate(['/animal/', this.animal._id]);

        } else {
          this.status = false;
          this.mensaje = 'Error al actualizar';
          console.log(response.message);
        }

      },
      error => {
        console.error(<any>error);
      }
      );
  }

  fileChangeEvent(fileinput: any) {
    this.files_to_upload = <Array<File>>fileinput.target.files;
    console.log(this.files_to_upload);

  }
}
