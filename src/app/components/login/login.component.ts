import { fadeIn } from './../animation';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params,  Router } from '@angular/router';

import { GLOBAL } from './../../services/global';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService],
  animations: [fadeIn]
})
export class LoginComponent implements OnInit {
  public user: User;
  public title: String;
  public mensaje: String = null;
  public status: Boolean = false;

  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _us: UserService
  ) {
    this.title = 'Login';

    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit() {
    // console.log('componente login cargado.');


  }
  onSubmit() {
    this.mensaje = '';
    this.status = false;
    // logeo
    this._us.signup(this.user)
      .subscribe(
        response => {
          this.identity = response.user;

          if (!this.identity || !this.identity._id) {

            this.mensaje = 'Error al ingresar';
            // console.log('Error al ingresar');
          } else {
            // obtener token.
            // console.log(this.identity);
             this.identity.password = '';
            localStorage.setItem('identity', JSON.stringify(this.identity));

            this._us.signup(this.user, 'true')
                    .subscribe(
                      res => {
                        this.token = res.token;

                        if (this.token.length <= 0) {
                          this.mensaje = 'Token no generado';
                          // console.log('Token no generado');
                        } else {
                          localStorage.setItem('token', this.token);

                          this.status = true;
                          // console.log(this.token);
                          this._router.navigate(['/']);
                        }
                      },
                      error => {
                        const errmsj = <any>error;
                        if (errmsj != null) {
                          const body = JSON.parse(errmsj._body);
                          this.mensaje = body.message;
                        }
                      }
                    );
          }
        },
        error => {
          const errmsj = <any>error;
          if (errmsj != null) {
            const body = JSON.parse(errmsj._body);
            this.mensaje = body.message;
          }
        }
      );
  }

}
