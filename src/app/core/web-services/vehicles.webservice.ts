import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesWebService {

url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4444/api/vehicles/';
  }

  getAllVehicles(): Observable<any[]>{
    return this.http.get<any[]>(this.url + 'findAll');
  }

}
