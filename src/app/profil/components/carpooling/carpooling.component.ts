import { Component } from '@angular/core';
import { AdvertCarpooling } from 'src/app/shared/models/advert-carpooling';
import { AdvertCarpoolingWebService } from './../../../core/web-services/advert-carpooling.webservice';

@Component({
  selector: 'app-carpooling',
  templateUrl: './carpooling.component.html',
  styleUrls: ['./carpooling.component.scss']
})
export class CarpoolingComponent {
  
  advertCarpoolingList: AdvertCarpooling[] = [];
  driverOrNot: boolean = false;
  advertCarpooling: AdvertCarpooling = new AdvertCarpooling;

    constructor(private advertCarpoolingWebService: AdvertCarpoolingWebService) {}

    ngOnInit(): void {
      this.AdvertgetAllCarpoolings();
    }


    // Get all advert carpooling
    AdvertgetAllCarpoolings() {
      this.advertCarpoolingWebService.getAllBookingWithIdEmployee(2).subscribe(data => {
        this.advertCarpoolingList = data;
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
