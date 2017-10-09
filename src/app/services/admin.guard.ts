
import { UserService } from './user.service';
import { CanActivate,  Router } from '@angular/router';
import { Injectable } from '@angular/core';


@Injectable()
export class AdminGuard implements CanActivate  {

  constructor(
    private _router: Router,
    private _us: UserService
  ) { }

  canActivate() {
    let identity = this._us.getIdentity();

    if (identity && identity.role === 'ROLE_ADMIN') {
      return true;
    } else {
      this._router.navigate(['/']);

      return false;
    }
  }
}
