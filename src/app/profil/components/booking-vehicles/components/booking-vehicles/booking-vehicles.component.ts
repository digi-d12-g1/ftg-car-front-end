import {Component, OnInit} from '@angular/core';
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {VehiclesWebService} from "../../../../../core/web-services/vehicles.webservice";
import {Vehicle} from "../../../../../shared/models/vehicle";

const PRESENT_UTC_DATE = new Date();

@Component({
  selector: 'app-booking-vehicles',
  templateUrl: './booking-vehicles.component.html',
  styleUrls: ['./booking-vehicles.component.scss']
})
export class BookingVehiclesComponent implements OnInit {

  vehicles: Vehicle[] = [];

  //Dates
  locationStart!: Date;
  locationEnd!: Date;
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
  endDate!: NgbDateStruct;
  endTime!: NgbTimeStruct;

  endTimeError: boolean = false;
  startTimeError: boolean = false;
  errors: boolean = false;

  constructor(private vehicleWebService: VehiclesWebService) {
  }

  ngOnInit(): void {
    this.initNgbDates();
    this.getVehiclesIfAvailable(this.locationStart, this.locationEnd);
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
    this.endDate = this.startDate;
    this.endTime = {hour: endHour, minute: endMinutes, second: 0};

    // date type objects
    this.initDates();
  }

  /**
   * Get available vehicles on given dates
   * @param departure the location start date
   * @param arrival the location end date
   */
  public getVehiclesIfAvailable(departure: Date, arrival: Date) {
    this.vehicleWebService.getAllVehiclesAvailableForBooking(departure, arrival).subscribe(
      data => this.vehicles = data
    )
  }

  /**
   * Initialize formatted dates for further backend process
   * @private
   */
  private initDates() {
    this.locationStart = new Date(Date.UTC(
      this.startDate.year,
      this.startDate.month - 1,
      this.startDate.day,
      this.startTime.hour - 1,
      this.startTime.minute
    ))

    this.locationEnd = new Date(Date.UTC(
      this.endDate.year,
      this.endDate.month - 1,
      this.endDate.day,
      this.endTime.hour - 1,
      this.endTime.minute
    ))
  }


  /**
   * Assure that ending date is always equal to starting date or above
   */
  checkDate() {
    if ((this.endDate.year < this.startDate.year ||
      (this.endDate.year === this.startDate.year && this.endDate.month < this.startDate.month) ||
      (this.endDate.year === this.startDate.year && this.endDate.month === this.startDate.month &&
        this.endDate.day < this.startDate.day))) {
      this.endDate = this.startDate
    }
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

    // Time error checks
    const sameDay = JSON.stringify(this.startDate) === JSON.stringify(this.endDate);
    this.endTimeError = sameDay ? (this.endTime.hour <= this.startTime.hour) : false;

    const presentDay = JSON.stringify(this.startDate) === JSON.stringify(this.presentDate);
    this.startTimeError = presentDay ? (this.startTime.hour < this.presentTime.hour) : false;

    this.errors = true;

    // Fetch available vehicles
    if(!this.endTimeError && !this.startTimeError) {
      this.errors = false;
      this.getVehiclesIfAvailable(this.locationStart, this.locationEnd);
    }
  }
}
