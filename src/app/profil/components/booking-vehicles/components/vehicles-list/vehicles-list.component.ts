import {Component, Input} from '@angular/core';
import {VehiclesWebService} from "../../../../../core/web-services/vehicles.webservice";
import {Vehicle} from "../../../../../shared/models/vehicle";
import {BookingWebserviceService} from "../../../../../core/web-services/booking-webservice.service";
import {UpdateVehicleService} from "../../../../../shared/services/update-vehicle/update-vehicle.service";
import {BookingVehicle} from "../../../../../shared/models/booking-vehicle";
import {Employee} from "../../../../../shared/models/employee";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../../../core/auth/services/token-storage.service";

@Component({
  selector: 'app-vehicles-list-booking',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent {
  @Input()
  vehicles!: Vehicle[];
  vehicle: Vehicle = new Vehicle();
  booking!: BookingVehicle;

  //Dates received from parent
  @Input()
  locationStart!: Date;
  @Input()
  locationEnd!: Date;
  @Input()
  errors!: boolean;



  constructor(
    private vehicleService: UpdateVehicleService,
    private bookingWebService: BookingWebserviceService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {
  }

  getBookingInfo(vehicle: Vehicle) {
    this.vehicleService.sendVehicleToUpdate(vehicle);
    this.vehicleService.vehicleService.subscribe(data => this.vehicle = data)
  }

  addBooking(vehicle: Vehicle) {
    let user = this.tokenStorage.getUser()

    let employee = new Employee(user.username, user.password, user.id)
    this.booking = new BookingVehicle(this.locationStart,this.locationEnd,vehicle, employee)
    this.bookingWebService.addBooking(this.booking);
    this.router.navigateByUrl('/profil')
  }
}
