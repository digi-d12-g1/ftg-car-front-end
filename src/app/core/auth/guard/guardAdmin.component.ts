import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardComponent implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ):    | Observable<boolean | UrlTree>    | Promise<boolean | UrlTree>    | boolean    | UrlTree {

        const token = localStorage.getItem('ACCESS_TOKEN');

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
