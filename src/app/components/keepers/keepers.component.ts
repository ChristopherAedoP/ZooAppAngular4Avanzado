import { UserService } from './../../services/user.service';
import { User } from '../../models/user';
import { fadeIn } from '../animation';
import { Component, OnInit } from '@angular/core';



import { GLOBAL } from './../../services/global';


@Component({
  selector: 'app-keepers',
  templateUrl: './keepers.component.html',
  providers: [UserService],
  animations: [fadeIn]

})
export class KeepersComponent implements OnInit {

  public title: String;
  public keepers: User[];
  public url;

  constructor(
    public _us: UserService
  ) {

    this.title = 'Cuidadores';
    this.url = GLOBAL.urlAPI;

  }

  ngOnInit() {
    this.getKeepers();
  }
  getKeepers() {
    this._us.getKeepers().subscribe(
      response => {
        if (response.keepers) {
          this.keepers = response.keepers;
        } else {

        }

      },
      error => {
        console.error(<any>error);
      }

    );
  }

}
