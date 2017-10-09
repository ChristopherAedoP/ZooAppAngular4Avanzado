
import { Observable, } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { GLOBAL } from './global';
import { User } from './../models/user';
import { UserService } from './user.service';


@Injectable()
export class AnimalService {
  public url: string;
  public identity;
  public token;

  constructor(
    private _http: Http
  ) {
    this.url = GLOBAL.urlAPI;

  }

  AddAnimal(token, animal) {
    const _params = JSON.stringify(animal);
    const _headers = new Headers({
      'Authorization': token,
       'Content-Type': 'application/json'
      });

    return this._http.post(this.url + 'animal', _params, { headers: _headers })
      .map(res => res.json());

  }

  editAnimal(token, id, animal) {

    const _params = JSON.stringify(animal);
    const _headers = new Headers({
      'Authorization': token,
      'Content-Type': 'application/json'
    });

    return this._http.put(this.url + 'animal/' + id, _params, { headers: _headers })
                    .map(res => res.json());

  }

  getAnimals() {

    const _headers = new Headers({'Content-Type': 'application/json'});
    let _options = new RequestOptions({ headers: _headers });

    return this._http.get(this.url + 'animals', _options)
                      .map(res => res.json());

  }
  getAnimal(id) {

    const _headers = new Headers({ 'Content-Type': 'application/json' });
    let _options = new RequestOptions({ headers: _headers });

    return this._http.get(this.url + 'animal/' + id, _options)
      .map(res => res.json());

  }

  deleteAnimal(token, id) {

    const _headers = new Headers({
      'Authorization': token,
      'Content-Type': 'application/json'
    });

    let _options = new RequestOptions({ headers: _headers });


    return this._http.delete(this.url + 'animal/' + id, _options)
          .map(res => res.json());

  }
}
