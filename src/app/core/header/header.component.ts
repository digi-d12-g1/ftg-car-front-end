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



  constructor(private router: Router, private tokenStorageService: TokenStorageService, private isConnectService: IsConnectService) {

  }
  ngOnInit(): void {

  }

  logOut():void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/auth/login']);
  };
}
