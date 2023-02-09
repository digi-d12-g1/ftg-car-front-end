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
  vehicleNumberplate!: number;

  constructor(private vehiclesWebService:VehiclesWebService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllVehicles();

  }





////////////////////////////////////////////// Find All ///////////////////////////////////////////////////
getAllVehicles() {
  this.vehiclesWebService.getAllVehicles().subscribe(data => {
    this.vehicleList = data;
    console.log('zizi : ' + data);
  });
}


////////////////////////////////////////////// DeleteById ///////////////////////////////////////////////////


deleteVehicleByNumberplate(numberplate: any) {
  console.log('Réception du NumberPlate pour suppression' + numberplate)
  this.vehiclesWebService.deleteVehicleByNumberplate(numberplate).subscribe();
}

}
