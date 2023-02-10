import {Component, OnInit} from '@angular/core';
import {VehiclesWebService} from "../../../core/web-services/vehicles.webservice";
import {Vehicle} from "../../../shared/models/vehicle";
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {BookingWebserviceService} from "../../../core/web-services/booking-webservice.service";
import {UpdateVehicleService} from "../../../shared/services/update-vehicle/update-vehicle.service";
import {BookingVehicle} from "../../../shared/models/booking-vehicle";
import {Employee} from "../../../shared/models/employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  vehicle: Vehicle = new Vehicle();
  booking!: BookingVehicle;
  formGroup!: FormGroup;

  //Dates
  date: Date = new Date();
  locationStart!: Date;
  locationEnd!: Date;
  presentDate: NgbDateStruct = {
    year: this.date.getUTCFullYear(),
    month: this.date.getUTCMonth() + 1,
    day: this.date.getUTCDay() + 5
  };
  presentTime: NgbTimeStruct = {
    hour: this.date.getUTCHours(),
    minute: this.date.getUTCMinutes(),
    second: 0
  }
  startDate!: NgbDateStruct;
  startTime!: NgbTimeStruct;
  endDate!: NgbDateStruct;
  endTime!: NgbTimeStruct;


  constructor(
    private vehicleWebService: VehiclesWebService,
    private vehicleService: UpdateVehicleService,
    private formBuilder: FormBuilder,
    private bookingWebService: BookingWebserviceService,
    private router: Router
  ) {
  }

  //https://medium.com/@andrey.shihov/ngb-bootstrap-datepickers-model-types-d76cdfe7e77d

  ngOnInit(): void {
    this.getVehicles();
    this.initNgbDates();
  }

  private initNgbDates() {
    // ngb components
    this.startTime = this.presentTime;
    this.startDate = this.presentDate;
    this.endDate = this.startDate;
    this.endTime = this.startTime;

    // date type objects
    this.initDates();
  }

  private initDates() {
    this.locationStart = new Date(Date.UTC(
      this.startDate.year,
      this.startDate.month,
      this.startDate.day,
      this.startTime.hour,
      this.startTime.minute
    ))

    this.locationEnd = new Date(Date.UTC(
      this.endDate.year,
      this.endDate.month,
      this.endDate.day,
      this.endTime.hour,
      this.endTime.minute
    ))
  }

  createSearchForm() {
    this.formGroup = this.formBuilder.group({
      dates: this.formBuilder.group({
        startDate: new FormControl(this.startDate),
        startTime: new FormControl(this.startTime),
        endDate: new FormControl(this.endDate),
        endTime: new FormControl(this.startTime),
      })
    });
  }

  checkDate() {
    // to keep a end date always equal or above to the start date
    if ((this.endDate.year < this.startDate.year ||
      (this.endDate.year === this.startDate.year && this.endDate.month < this.startDate.month) ||
      (this.endDate.year === this.startDate.year && this.endDate.month === this.startDate.month &&
        this.endDate.day < this.startDate.day))) {
      this.endDate = this.startDate
    }
  }

  checkTime() {
    if (this.endTime === undefined) {
      this.endTime = this.startTime
      this.endTime.hour++;
    }
    // start time check
    if (JSON.stringify(this.startDate) === JSON.stringify(this.presentDate)) {
      if (this.startTime.hour < this.date.getUTCHours()) {
        this.startTime.hour = this.date.getUTCHours();
      }
    }
    // end time check
    if (JSON.stringify(this.endDate) === JSON.stringify(this.startDate)) {
      if (this.endTime.hour < this.startTime.hour) {
        this.endTime.hour = this.startTime.hour + 1;
      }
    }
  }

  checkIfStartDateNotPassed(startDate: NgbDateStruct) {
    let date = new Date();
    return (
      startDate.year < date.getUTCFullYear() ||
      (startDate.year === date.getUTCFullYear() && startDate.month < date.getUTCMonth() + 1) ||
      (startDate.year === date.getUTCFullYear() && startDate.month === date.getUTCMonth() + 1 &&
        startDate.day < date.getUTCDay() + 5)
    )
  }

  public getVehicles() {
    this.vehicleWebService.getAllVehicles().subscribe(
      data => this.vehicles = data
    )
  }

  getBookingInfo(vehicle: Vehicle) {
    this.initDates();
    this.vehicleService.sendVehicleToUpdate(vehicle);
    this.vehicleService.vehicleService.subscribe(data => this.vehicle = data)
  }

  addBooking(vehicle: Vehicle) {
    let employee = new Employee('user1', 'pass1', 1)
    this.booking = new BookingVehicle(this.locationStart,this.locationEnd,vehicle, employee)
    this.bookingWebService.addBooking(this.booking);
    this.router.navigateByUrl('/profil')
  }
}
