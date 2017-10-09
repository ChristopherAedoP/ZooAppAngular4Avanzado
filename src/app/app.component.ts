import { GLOBAL } from './services/global';

import { Component, OnInit , DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck {
  title = 'NGZOO';
  public identity;
  public token;
 public url;

  constructor(
    public _us: UserService,
    private _router: Router
  ) {
    // console.log(this._us.getIdentity());
    // console.log(this._us.getToken());
    this.url = GLOBAL.urlAPI;

  }

  ngOnInit() {
    this.identity = this._us.getIdentity();
  }
  ngDoCheck() {
    this.identity = this._us.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this.token = null;
    this._router.navigate(['/']);
  }
}
