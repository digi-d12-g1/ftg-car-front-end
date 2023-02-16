import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/core/auth/services/token-storage.service';
import { AdvertCarpooling } from 'src/app/shared/models/advert-carpooling';
import { AdvertCarpoolingWebService } from '../../../core/web-services/advert-carpooling.webservice';

@Component({
  selector: 'app-carpooling',
  templateUrl: './carpooling.component.html',
  styleUrls: ['./carpooling.component.scss']
})
export class CarpoolingComponent implements OnInit {

  idUser = this.tokenStorageService.getUser()?.id;  
  advertCarpoolingList: AdvertCarpooling[] = [];
  advertCarpoolingFinishList: AdvertCarpooling[] = [];
  advertCarpoolingCurrentList: AdvertCarpooling[] = [];
  driverOrNot: boolean = false;
  advertCarpooling: AdvertCarpooling = new AdvertCarpooling;
  bookingAdvertCarpoolingList: AdvertCarpooling[] = [];
  bookingAdvertCarpoolingFinishList: AdvertCarpooling[] = [];
  bookingAdvertCarpoolingCurrentList: AdvertCarpooling[] = [];

    constructor(private advertCarpoolingWebService: AdvertCarpoolingWebService, private tokenStorageService: TokenStorageService) {}

    ngOnInit(): void {
      this.AdvertgetAllCarpoolings();
      this.AdvertgetAllBookingCarpoolings();
    }

    //call splitList() when the list of advert carpooling is updated
    ngDoCheck() {
      this.splitList();
    }

    //split the list of advert carpooling in two list, one for the current carpooling and one for the finish carpooling
    splitList() {
      const today = new Date();
      this.advertCarpoolingFinishList = this.advertCarpoolingList.filter(advert => {
        const advertDate = new Date(advert.departure!);      
        return advertDate < today;
      });
      this.advertCarpoolingCurrentList = this.advertCarpoolingList.filter(advert => {
        const advertDate = new Date(advert.departure!);      
        return advertDate > today;
      });
      this.bookingAdvertCarpoolingFinishList = this.bookingAdvertCarpoolingList.filter(advert => {
        const advertDate = new Date(advert.departure!);      
        return advertDate < today;
      });
      this.bookingAdvertCarpoolingCurrentList = this.bookingAdvertCarpoolingList.filter(advert => {
        const advertDate = new Date(advert.departure!);      
        return advertDate > today;
      });
    }


    // Get all advert carpooling
    AdvertgetAllCarpoolings() {
      this.advertCarpoolingWebService.getAllCarpoolingWithIdEmployee(this.idUser).subscribe(data => {
        this.advertCarpoolingList = data;
      });
    }

    // Get all booking advert carpooling
    AdvertgetAllBookingCarpoolings() {
      this.advertCarpoolingWebService.getAllBookingWithIdEmployee(this.idUser).subscribe(data => {
        this.bookingAdvertCarpoolingList = data.map((booking: any) => booking.idAdvertCarpooling);
      });
    }

    switchDrive() {
      this.driverOrNot = true;
    }

    switchPassenger() {
      this.driverOrNot = false;
    }

    getCarpooling(advert: AdvertCarpooling) {
      this.advertCarpooling = advert;
    }
}
