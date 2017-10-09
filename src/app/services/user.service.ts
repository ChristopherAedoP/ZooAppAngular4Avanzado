
import { Observable , } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { GLOBAL } from './global';

@Injectable()
export class UserService {
  public url: string;
  public identity;
  public token;

  constructor(
    private _http: Http
  ) {
    this.url = GLOBAL.urlAPI;

  }

  register(user_to_register) {
    const _params  = JSON.stringify(user_to_register);
    const _headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(this.url + 'register', _params, { headers: _headers})
                      .map(res => res.json());

  }

  signup(user_to_login, gettoken = null) {
    if (gettoken != null ) {
      user_to_login.gettoken = gettoken;
    }

    const _params = JSON.stringify(user_to_login);
    const _headers = new Headers({ 'Content-Type': 'application/json' });

    return this._http.post(this.url + 'login', _params, { headers: _headers })
                      .map(res => res.json());

  }

  getIdentity() {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if (identity !== undefined) {
      this.identity = identity;

    } else {
      this.identity = null;
    }

    return this.identity;

  }

  getToken() {
    let token = localStorage.getItem('token');

    if (token !== undefined) {
      this.token = token;

    } else {
      this.token = null;
    }

    return this.token;

  }

  updateUser(user_to_updated) {

    const _params = JSON.stringify(user_to_updated);
    const _headers = new Headers({
        'Authorization': this.getToken(),
        'Content-Type': 'application/json'
      });

    return this._http.put(this.url + 'updateuser/' + user_to_updated._id, _params, { headers: _headers })
      .map(res => res.json());

  }

  getKeepers() {

    const _headers = new Headers({ 'Content-Type': 'application/json' });
    let _options = new RequestOptions({ headers: _headers });

    return this._http.get(this.url + 'keepers', _options)
      .map(res => res.json());

  }
}
