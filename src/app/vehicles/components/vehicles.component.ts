import { Component } from '@angular/core';
import { VehiclesWebService } from 'src/app/core/web-services/vehicles.webservice';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent {

  vehicleList: any[] = [];

  constructor(private vehiclesWebService:VehiclesWebService) {
    this.getAllVehicles();
  }

getAllVehicles() {
  this.vehiclesWebService.getAllVehicles().subscribe(data => {
    this.vehicleList = data;
    console.log('zizi : ' + data);
  });
}

}
