import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/auth/services/token-storage.service';
import { BookingVehicle } from 'src/app/shared/models/booking-vehicle';
import { BookingWebserviceService } from './../../../core/web-services/booking-webservice.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  idUser = this.tokenStorageService.getUser()?.id;
  bookingVehicleList: BookingVehicle[] = [];
  bookingVehicleFinishList: BookingVehicle[] = [];
  bookingVehicleCurrentList: BookingVehicle[] = [];
  bookingVehicle: BookingVehicle = new BookingVehicle(new Date(), new Date(), {}, {});

  constructor(private tokenStorageService: TokenStorageService, private bookingWebserviceService: BookingWebserviceService) {}
  
  ngOnInit(): void {
    this.getAllBookingVehicleWithIdEmployee();
  }

  //call splitList() when the list of booking vehicle is updated
  ngDoCheck() {
    this.splitList();
  }

  //split the list of booking vehicle in two list, one for the current booking vehicle and one for the finish booking vehicle
  splitList() {
    const today = new Date();
    this.bookingVehicleFinishList = this.bookingVehicleList.filter(booking => {
      const bookingDate = new Date(booking.departure!);
      return bookingDate < today;
    });
    this.bookingVehicleCurrentList = this.bookingVehicleList.filter(booking => {
      const bookingDate = new Date(booking.arrival!);
      return bookingDate > today;
    });
  }

  // Get all booking vehicle with id employee
  async getAllBookingVehicleWithIdEmployee() {
    await this.bookingWebserviceService.getAllBookingWithIdEmployee(this.idUser).subscribe(data => {
      this.bookingVehicleList = data;
    })
  }

  // put the selected booking vehicle in bookingVehicle
  getBookingVehicle(bookingVehicle: BookingVehicle) {
    this.bookingVehicle = bookingVehicle;
  }


}
