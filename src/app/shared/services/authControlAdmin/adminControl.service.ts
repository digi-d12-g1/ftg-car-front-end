import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Employee } from "../../models/employee";

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AdminControlService {

  isAdminService: BehaviorSubject<any > = new BehaviorSubject('' );


sendVehicleToUpdate() {
  this.isAdminService.next(window.sessionStorage.getItem(TOKEN_KEY));

}

}
