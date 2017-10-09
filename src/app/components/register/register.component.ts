import { fadeIn } from './../animation';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


import { GLOBAL } from './../../services/global';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [UserService],
  animations: [fadeIn]
})
export class RegisterComponent implements OnInit {
  public user: User;
  public title: String;
  public mensaje: String = null;
  public status: Boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _us: UserService
  ) {
    this.title = 'Registro';

    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit() {
    // console.log('componente registro cargado.');

  }
  onSubmit(registerForm) {

    this._us.register(this.user)
            .subscribe(
              response => {
                if (response.user) {
                  // this.user = response.user;
                  this.mensaje = 'El registro se a realizado correctamente, Ingresa con ' + this.user.email;
                  this.status = true;
                  this.user = new User('', '', '', '', '', '', 'ROLE_USER');
                  registerForm.reset();
                } else {
                  this.status = false;
                  this.mensaje = 'Error al registrarse';
                  // console.log(response.message);
                }

                // console.log(response.user);
              },
              error => {
                console.error(<any>error);
              }
            );
  }
}
