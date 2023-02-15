import { AdminControlService } from './shared/services/authControlAdmin/adminControl.service';
import { Location } from '@angular/common';
import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ftg-car-front-end';
  location: Location;

  authControleSubscription!: Subscription;
  controlAdminRole!: Token;


  constructor(location: Location, private adminControlService: AdminControlService) {
    this.location = location;
    this.controlIfUserIfReallyAdmin();
  }

  checkUrlHeader() : boolean {
    return this.location.path() !== '/auth/login';
  }

  checkUrlFooter() : boolean {
    return this.location.path() !== '/auth/login' && this.location.path() !== '/404';
  }

get adminControl() {
  return this.controlIfUserIfReallyAdmin();
}

controlIfUserIfReallyAdmin() {
  this.authControleSubscription = this.adminControlService.isAdminService.subscribe( data=> {
    // this.controlAdminRole = data;
    // if ( this.controlAdminRole. == 'admin' ) {
    // console.log('Control Admin', data)
    // console.log('Control Admin',  this.controlAdminRole)
    // }
  }
);
}

}
