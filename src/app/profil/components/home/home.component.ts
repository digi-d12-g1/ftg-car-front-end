import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsConnectService } from 'src/app/core/auth/services/isConect.service';
import { TokenStorageService } from 'src/app/core/auth/services/token-storage.service';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
}
