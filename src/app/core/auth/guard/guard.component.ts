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
export class GuardComponent implements CanActivate {
  constructor(private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ):    | Observable<boolean | UrlTree>    | Promise<boolean | UrlTree>    | boolean    | UrlTree {

        const token = window.sessionStorage.getItem('auth-token');

    if (token == 'profil' || token == 'admin') {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }
}
