import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardComponent implements CanActivate {
  constructor(private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ):    | Observable<boolean | UrlTree>    | Promise<boolean | UrlTree>    | boolean    | UrlTree {

        const token = window.sessionStorage.getItem('auth-token');

    if (token == 'admin') {

      return true;

    } else if (token == 'profil') {

      this.router.navigateByUrl('/404');
      return false;

    } else {

      this.router.navigateByUrl('/auth/login');
      return false;

    }
  }
}
