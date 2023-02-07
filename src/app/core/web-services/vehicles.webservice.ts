import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesWebService {

url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:4444/api/vehicles/';
  }

  getAllVehicles(): Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>(this.url + 'findAll');
  }

  deleteVehicleByNumberplate(numberplate: string): Observable<Vehicle>{
    return this.http.delete<Vehicle>(this.url + 'delete/{' + numberplate + '}');
  }

}
