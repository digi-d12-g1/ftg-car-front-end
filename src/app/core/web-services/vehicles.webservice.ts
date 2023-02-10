import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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


  addVehicle(newVehicle: Vehicle) {
    return this.http.post<Vehicle>(this.urlBack + 'add' , newVehicle ) ;
  }

    ////////////////////////////////////////////// UpdateVehicle ///////////////////////////////////////////////////

    updateVehicle(idVehicle: number, updateVehicle: Vehicle) {
      console.log('Web service id update', updateVehicle )
      return this.http.put<Vehicle>(this.urlBack + 'update/' + idVehicle , updateVehicle ) ;
    }

  ////////////////////////////////////////////// DeleteById ///////////////////////////////////////////////////

  deleteVehicleById(idVehicle: number){
    return this.http.delete<number>(this.urlBack + 'delete/' + idVehicle);
  }

}
