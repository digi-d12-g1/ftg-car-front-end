import {Component, OnInit} from '@angular/core';
import {VehiclesWebService} from "../../../core/web-services/vehicles.webservice";
import {Vehicle} from "../../../shared/models/vehicle";
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  startDate!: NgbDateStruct;
  startTime!: NgbTimeStruct;
  endDate!: NgbDateStruct;
  endTime!: NgbTimeStruct;
  dates: NgbDateStruct[] = []

  test: boolean = false

  constructor(private vehicleService: VehiclesWebService) {
  }
  //https://medium.com/@andrey.shihov/ngb-bootstrap-datepickers-model-types-d76cdfe7e77d

  ngOnInit(): void {
    this.getVehicles();
  }

  checkDate() {
    if(this.endDate === undefined) {
      this.endDate = this.startDate
    }
    this.dates = [this.startDate, this.endDate]
    console.log('Start Date : ' + JSON.stringify(this.startDate))
    console.log('End Date : ' + JSON.stringify(this.endDate))
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
    this.vehicleService.getAllVehicles().subscribe(
      data => this.vehicles = data
    )
  }
}
