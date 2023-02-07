import { Component } from '@angular/core';
import { VehiclesWebService } from 'src/app/core/web-services/vehicles.webservice';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent {

  vehicleList: Vehicle[] = [];

  constructor(private vehiclesWebService:VehiclesWebService) {
    this.getAllVehicles();
  }

getAllVehicles() {
  this.vehiclesWebService.getAllVehicles().subscribe(data => {
    this.vehicleList = data;
    console.log('zizi : ' + data);
  });
}

deleteVehicleByNumberplate(numberplate: string) {
  this.vehiclesWebService.deleteVehicleByNumberplate(numberplate).subscribe();
}

}
