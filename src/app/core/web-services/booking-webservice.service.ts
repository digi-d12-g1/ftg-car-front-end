import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BookingVehicle} from "../../shared/models/booking-vehicle";
import {BehaviorSubject} from "rxjs";
import {Vehicle} from "../../shared/models/vehicle";

@Injectable({
  providedIn: 'root'
})
export class BookingWebserviceService {

  private baseUrl = environment.apiUrl + '/bookings';
  vehicle: BehaviorSubject<Vehicle> = new BehaviorSubject(new Vehicle);

  constructor(private httpClient: HttpClient) { }

  /*** Observers ***/
  getVehicleObserver(vehicleFromList: Vehicle) {
    this.vehicle.next(vehicleFromList);
  }

  /*** CRUD ***/
  addBooking(booking: BookingVehicle) {
    this.httpClient.post(this.baseUrl, booking).subscribe()
  }

  // find by id employee
  getAllBookingWithIdEmployee(idEmployee: number) {
    return this.httpClient.get<BookingVehicle[]>(this.baseUrl + '/findByEmployee/' + idEmployee);
  }
}
