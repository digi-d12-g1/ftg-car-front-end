import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiclesWebService } from 'src/app/core/web-services/vehicles.webservice';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'app-listVehicles',
  templateUrl: './listVehicles.component.html',
  styleUrls: ['./listVehicles.component.scss']
})

export class ListVehiclesComponent implements OnInit {

  vehicleList: Vehicle[] = [];
  vehicleId!: number;

  constructor(private vehiclesWebService:VehiclesWebService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllVehicles();

  }





////////////////////////////////////////////// Find All ///////////////////////////////////////////////////
getAllVehicles() {
  this.vehiclesWebService.getAllVehicles().subscribe(data => {
    this.vehicleList = data;
  });
}


////////////////////////////////////////////// DeleteById ///////////////////////////////////////////////////


deleteVehicleById(idVehicle: any) {
  this.vehicleId = +idVehicle; // le + ici parse le any en number
  this.vehiclesWebService.deleteVehicleById(this.vehicleId).subscribe();
}

}
