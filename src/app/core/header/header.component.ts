import { Employee } from 'src/app/shared/models/employee';
import { IsConnectService } from './../auth/services/isConect.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

isAdmin: boolean = false;
infoCoUser: Employee = new Employee;

  constructor(private router: Router, private tokenStorageService: TokenStorageService, private isConnectService: IsConnectService) {

  }
  ngOnInit(): void {
    this.isUserAdmin();
  }

  private isUserAdmin() {
    this.infoCoUser = this.tokenStorageService.getUser();
    if (this.infoCoUser.isAdmin == true) {
      this.isAdmin = true;
    }
  }

  logOut():void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  };
}
