import { fadeLateral } from './../../animation';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { UploadService } from './../../../services/upload.service';
import { GLOBAL } from './../../../services/global';
import { User } from '../../../models/user';

import { Animal } from './../../../models/animal';
import { AnimalService } from './../../../services/animal.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  providers: [AnimalService, UserService, UploadService],
  animations: [fadeLateral]
})
export class AddComponent implements OnInit {
  public title: String;
  public animal: Animal;
  public user: User;
  public identity;
  public token;
  public url;
  public mensaje: String = null;
  public status: Boolean = false;
  public files_to_upload: Array<File>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _as: AnimalService,
    public _us: UserService,
    public _ups: UploadService
  ) {
    this.title = 'Añadir';
    this.url = GLOBAL.urlAPI;

    this.identity = this._us.getIdentity();
    this.token = this._us.getToken();

    this.animal = new Animal('', '', '', 2017, '', '');
  }

  ngOnInit() {

  }
  onSubmit() {
    this._as.AddAnimal(this.token, this.animal)
      .subscribe(
      response => {
        if (response.animal) {

          this.animal = response.animal;
          this.mensaje = 'Animal creado.';
          this.status = true;

          if (this.files_to_upload) {
            this._ups.makeFileRequest(this.url + 'upload-image-animal/' + this.animal._id, [], this.files_to_upload, this.token, 'image')
              .then((result: any) => {
                this.animal.image = result.image;
              });
          }

          this._router.navigate(['/admin-panel/listado']);


        } else {
          this.status = false;
          this.mensaje = 'Error al crear';
          console.log(response.message);
        }

        // console.log(response.user);
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
