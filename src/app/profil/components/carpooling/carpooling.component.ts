import { Component, OnInit } from '@angular/core';
import { AdvertCarpooling } from 'src/app/shared/models/advert-carpooling';
import { AdvertCarpoolingWebService } from './../../../core/web-services/advert-carpooling.webservice';

@Component({
  selector: 'app-carpooling',
  templateUrl: './carpooling.component.html',
  styleUrls: ['./carpooling.component.scss']
})
export class CarpoolingComponent implements OnInit {
  
  advertCarpoolingList: AdvertCarpooling[] = [];
  advertCarpoolingFinishList: AdvertCarpooling[] = [];
  advertCarpoolingCurrentList: AdvertCarpooling[] = [];
  driverOrNot: boolean = true;
  advertCarpooling: AdvertCarpooling = new AdvertCarpooling;

    constructor(private advertCarpoolingWebService: AdvertCarpoolingWebService) {}

    ngOnInit(): void {
      this.AdvertgetAllCarpoolings();
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
