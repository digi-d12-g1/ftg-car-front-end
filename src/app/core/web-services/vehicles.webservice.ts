import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesWebService {

urlBack: string;
any: any;

  constructor(private http: HttpClient) {
    this.urlBack = 'http://localhost:4444/api/vehicles/';
  }

  ////////////////////////////////////////////// Find All ///////////////////////////////////////////////////

  getAllVehicles(): Observable<Vehicle[]>{
    return this.http.get<Vehicle[]>(this.urlBack + 'findAll');
  }


  ////////////////////////////////////////////// AddVehicle ///////////////////////////////////////////////////

  addVehicle(newVehicule: Vehicle): Observable<Vehicle> {
    console.log('web Service', newVehicule)

    this.any = this.http.post<Vehicle>(this.urlBack + 'add', newVehicule)
    return this.any;
  }


  ////////////////////////////////////////////// DeleteById ///////////////////////////////////////////////////

  deleteVehicleByNumberplate(numberplate: string): Observable<Vehicle>{
    return this.http.delete<Vehicle>(this.urlBack + 'delete/' + numberplate);
  }

}
