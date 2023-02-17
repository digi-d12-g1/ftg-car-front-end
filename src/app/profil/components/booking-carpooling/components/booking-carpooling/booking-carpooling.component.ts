import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import { AdvertCarpoolingWebService } from 'src/app/core/web-services/advert-carpooling.webservice';
import { AdvertCarpooling } from 'src/app/shared/models/advert-carpooling';
import {VehiclesWebService} from "../../../../../core/web-services/vehicles.webservice";
import {Vehicle} from "../../../../../shared/models/vehicle";

const PRESENT_UTC_DATE = new Date();

@Component({
  selector: 'app-booking-carpooling',
  templateUrl: './booking-carpooling.component.html',
  styleUrls: ['./booking-carpooling.component.scss']
})
export class BookingCarpoolingComponent implements OnInit {

  advertCarpoolings: AdvertCarpooling[] = [];

  //Dates
  locationStart!: Date;
  presentDate: NgbDateStruct = {
    year: PRESENT_UTC_DATE.getUTCFullYear(),
    month: PRESENT_UTC_DATE.getUTCMonth() + 1,
    day: PRESENT_UTC_DATE.getDate()
  };
  presentTime: NgbTimeStruct = {
    hour: PRESENT_UTC_DATE.getUTCHours() + 1,
    minute: PRESENT_UTC_DATE.getUTCMinutes(),
    second: 0
  }
  startDate!: NgbDateStruct;
  startTime!: NgbTimeStruct;

  startTimeError: boolean = false;
  errors: boolean = false;

  constructor(private advertCarpoolingWebService: AdvertCarpoolingWebService, private vehiclesWebService: VehiclesWebService) {
  }

  ngOnInit(): void {
    this.initNgbDates();
    this.getAdvertCarpoolingIfAvailable(this.locationStart);
  }

  /**
   * Initialize default dates to actual date and time
   * @private
   */
  private initNgbDates() {
    // ngb components
    let endHour = this.presentTime.hour + 1
    let endMinutes = this.presentTime.minute

    this.startTime = this.presentTime;
    this.startDate = this.presentDate;

    // date type objects
    this.initDates();
  }

  /**
   * Get available vehicles on given dates
   * @param departure the location start date
   * @param arrival the location end date
   */
  public getAdvertCarpoolingIfAvailable(departure: Date) {
    this.vehiclesWebService.getAllAdvertCarpoolingsBetweenDates(departure).subscribe(
      data => {
        this.advertCarpoolings = data;
        console.log('recup advert car pooling', data);
      }

    )
  }

  /**
   * Initialize formatted dates for further backend process
   * @private
   */
  private initDates() {
    this.locationStart = new Date(Date.UTC(
      this.startDate.year,
      this.startDate.month,
      this.startDate.day,
      this.startTime.hour,
      this.startTime.minute
    ))

  }



  /**
   * Used for Ngb Date to disable selection of dates interior to present date
   * @param startDate the location starting date
   */
  checkIfStartDateNotPassed(startDate: NgbDateStruct) {
    let date = new Date();
    return (
      startDate.year < date.getUTCFullYear() ||
      (startDate.year === date.getUTCFullYear() && startDate.month < date.getUTCMonth() + 1) ||
      (startDate.year === date.getUTCFullYear() && startDate.month === date.getUTCMonth() + 1 &&
        startDate.day < date.getDate())
    )
  }

  /**
   * Initialize a new search for available vehicles and validating
   * time selection
   */
  searchBooking() {
    this.initDates();


    const presentDay = JSON.stringify(this.startDate) === JSON.stringify(this.presentDate);
    this.startTimeError = presentDay ? (this.startTime.hour < this.presentTime.hour) : false;

    this.errors = true;

     // Fetch available vehicles
     if(!this.startTimeError) {
      this.errors = false;
      this.getAdvertCarpoolingIfAvailable(this.locationStart);
    }

  }
}
