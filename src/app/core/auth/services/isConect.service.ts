import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsConnectService {

  private token!: string;

  isConnectService: BehaviorSubject<boolean> = new BehaviorSubject(false);


  getIsConnect(isConnectFromAuthPage: boolean) {
    this.isConnectService.next(isConnectFromAuthPage);

  }


}
