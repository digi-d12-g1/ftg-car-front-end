import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Vehicle} from 'src/app/shared/models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesWebService {

urlBack: string;

  constructor(private http: HttpClient) {
    this.urlBack = 'http://localhost:4444/api/vehicles/';
  }

  ////////////////////////////////////////////// Find All ///////////////////////////////////////////////////

  getAllVehicles(): Observable<Vehicle[]>{
  return this.http.get<Vehicle[]>(this.urlBack + 'findAll');
  }

  getAllVehiclesAvailableForBooking(departure: Date, arrival: Date) {
    let url = this.urlBack + `booking/${departure}/${arrival}`
    return this.http.get<Vehicle[]>(url)
  }

  ////////////////////////////////////////////// AddVehicle ///////////////////////////////////////////////////


  addVehicle(newVehicle: Vehicle) {
    return this.http.post<Vehicle>(this.urlBack + 'add' , newVehicle ) ;
  }

    ////////////////////////////////////////////// UpdateVehicle ///////////////////////////////////////////////////

    updateVehicle(updateVehicle: Vehicle) {
      return this.http.put<Vehicle>(this.urlBack + 'update/', updateVehicle ) ;
    }

  ////////////////////////////////////////////// DeleteById ///////////////////////////////////////////////////

  deleteVehicleById(idVehicle: number){
    return this.http.delete<number>(this.urlBack + 'delete/' + idVehicle);
  }

}
