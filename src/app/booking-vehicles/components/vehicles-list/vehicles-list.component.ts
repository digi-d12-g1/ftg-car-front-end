import {Component, OnInit} from '@angular/core';
import {VehiclesWebService} from "../../../core/web-services/vehicles.webservice";
import {Vehicle} from "../../../shared/models/vehicle";
import {NgbDateStruct, NgbTimeStruct} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit{
  vehicles: Vehicle[] = [];
  startDate!: NgbDateStruct;
  startTime!: NgbTimeStruct;
  endDate!: NgbDateStruct;
  endTime!: NgbTimeStruct;

  constructor(private vehicleService: VehiclesWebService) {}

  ngOnInit(): void {
    this.getVehicles();
  }

  public getVehicles() {
    this.vehicleService.getAllVehicles().subscribe(
      data => this.vehicles = data
    )
  }
}
