import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from '../../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class UpdateVehicleService {

  vehicleService: BehaviorSubject<Vehicle> = new BehaviorSubject(new Vehicle);


sendVehicleToUpdate(vehicleFromListVehicle: Vehicle) {
  this.vehicleService.next(vehicleFromListVehicle);
}


}
