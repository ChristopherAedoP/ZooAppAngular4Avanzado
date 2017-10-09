
import { UploadService } from './../../services/upload.service';
import { fadeIn } from './../animation';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { GLOBAL } from './../../services/global';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  providers: [UserService, UploadService],
  animations: [fadeIn]
})
export class UserEditComponent implements OnInit {
  public title: String;
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
    public _us: UserService,
    public _ups: UploadService
  ) {
    this.title = 'Actualizar mis datos';

    this.identity = this._us.getIdentity();
    this.token = this._us.getToken();
    this.user = this.identity;
    this.url = GLOBAL.urlAPI;
  }

  ngOnInit() {

  }
  onSubmit() {
    this._us.updateUser(this.user)
      .subscribe(
          response => {
            if (response.user) {
              this.identity = this.user;
              localStorage.setItem('identity', JSON.stringify(this.user));
              this.mensaje = 'Sus datos se han actualizado.';
              this.status = true;



               this._ups.makeFileRequest(this.url + 'upload-image-user/' + this.user._id, [] , this.files_to_upload, this.token, 'image')
                        .then((result: any ) => {
                            this.user.image = result.image;
                            localStorage.setItem('identity', JSON.stringify(this.user));
                            console.log(this.user);

                        });
            } else {
              this.status = false;
              this.mensaje = 'Error al actualizar';
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
