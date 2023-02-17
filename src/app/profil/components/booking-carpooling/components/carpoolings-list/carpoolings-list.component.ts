import {Component, Input} from '@angular/core';
import {Employee} from "../../../../../shared/models/employee";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../../../../core/auth/services/token-storage.service";
import { AdvertCarpooling } from 'src/app/shared/models/advert-carpooling';
import { BookingCarpooling } from 'src/app/shared/models/booking-carpooling';
import { AdvertCarpoolingWebService } from 'src/app/core/web-services/advert-carpooling.webservice';
import { UpdateCarpoolingService } from 'src/app/shared/services/update-carpooling/update-carpooling.service';
import { BookingCarpoolingWebService } from 'src/app/core/web-services/booking-carpooling.webservice';

@Component({
  selector: 'app-carpoolings-list',
  templateUrl: './carpoolings-list.component.html',
  styleUrls: ['./carpoolings-list.component.scss']
})

export class CarpoolingsListComponent {
  @Input()
  advertCarpoolings!: AdvertCarpooling[];
  advertCarpooling: AdvertCarpooling = new AdvertCarpooling();
  bookingCarpooling!: BookingCarpooling;

  //Dates received from parent
  @Input()
  locationStart!: Date;
  @Input()
  locationEnd!: Date;
  @Input()
  errors!: boolean;



  constructor(
    private carpoolingService: UpdateCarpoolingService,
    private bookingWebService: BookingCarpoolingWebService,
    private router: Router,
    private tokenStorage: TokenStorageService
  ) {
    this.getBookingInfo();
  }


  ////////////////////////////////// Get All Carpooling Advert ///////////////////////////////////////

  getBookingInfo() {
    // advertCarpooling: AdvertCarpooling
    //this.carpoolingService.sendCarpoolingToUpdate(advertCarpooling);
    this.carpoolingService.carpoolingService.subscribe(data => {
      this.advertCarpooling = data;
    });
  }


  ////////////////////////////////// Delete Carpooling Advert ///////////////////////////////////////

  deleteBookingCarpooling(advertCarpooling: AdvertCarpooling) {
    let user = this.tokenStorage.getUser()

    let employee = new Employee(user.username, user.password, user.id)
    this.bookingCarpooling = new BookingCarpooling(advertCarpooling, employee)
    this.bookingWebService.addBooking(this.bookingCarpooling);
    this.router.navigateByUrl('/profil')
  }

  ////////////////////////////////// Add Carpooling Advert ///////////////////////////////////////

  addBookingCarpooling(advertCarpooling: AdvertCarpooling) {
    let user = this.tokenStorage.getUser()

    let employee = new Employee(user.username, user.password, user.id)
    this.bookingCarpooling = new BookingCarpooling(advertCarpooling, employee)
    this.bookingWebService.addBooking(this.bookingCarpooling);
    this.router.navigateByUrl('/profil')
  }
}
