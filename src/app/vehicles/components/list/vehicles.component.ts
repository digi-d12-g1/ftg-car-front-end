import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { VehiclesWebService } from 'src/app/core/web-services/vehicles.webservice';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'app-listVehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent implements OnInit {

  vehicleList: Vehicle[] = [];
  vehicleForm!: FormGroup;
  vehicleNumberplate!: number;
  vehicle: Vehicle = new Vehicle;

  constructor(private vehiclesWebService:VehiclesWebService, private dormBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.getAllVehicles();

  this.addVehicle();
  }
// Reactive form pour modifier / ajouter
  // formBuilder() {
  //   this.vehicleForm = this.formBuilder.group({
  //     id: [null],
  //     picture: [null],
  //     numberplate: [null],
  //     brand: [null],
  //     model: [null],
  //     vehiculeStatus: [null],
  //     category: [null],
  //     seatCapacity: [null],
  // });
  // }



//   onSubmitForm() {
//     console.log(this.vehicleForm.value);
// }

////////////////////////////////////////////// Find All ///////////////////////////////////////////////////
getAllVehicles() {
  this.vehiclesWebService.getAllVehicles().subscribe(data => {
    this.vehicleList = data;
    console.log('zizi : ' + data);
  });
}

 ////////////////////////////////////////////// AddVehicle ///////////////////////////////////////////////////

 addVehicle(){
  this.vehiclesWebService.addVehicle(this.vehicle).subscribe();
  };

////////////////////////////////////////////// DeleteById ///////////////////////////////////////////////////


deleteVehicleByNumberplate(numberplate: any) {
  console.log('Réception du NumberPlate pour suppression' + numberplate)
  this.vehiclesWebService.deleteVehicleByNumberplate(numberplate).subscribe();
}

}
