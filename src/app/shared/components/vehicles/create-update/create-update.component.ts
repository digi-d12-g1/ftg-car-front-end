import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesWebService } from 'src/app/core/web-services/vehicles.webservice';
import { Vehicle } from 'src/app/shared/models/vehicle';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateVehicleComponent implements OnInit {

  vehicleForm!: FormGroup;

  vehicle: Vehicle = new Vehicle;

  constructor(private vehiclesWebService: VehiclesWebService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formBuilderAddVehicle();
  }


// Reactive form pour modifier / ajouter
  formBuilderAddVehicle() {
    this.vehicleForm = this.formBuilder.group({
      picture: [null],
      numberplate: [null],
      brand: [null],
      model: [null],
      vehicleStatus: [null],
      category: [null],
      seatCapacity: [null],
  });
  }



  onSubmitForm() {
    this.vehicle = this.vehicleForm.value
    // this.vehicle.picture = this.vehicleForm.value.picture
    // this.vehicle.numberplate = this.vehicleForm.value.numberplate
    // this.vehicle.brand = this.vehicleForm.value.brand
    // this.vehicle.model = this.vehicleForm.value.model
    // this.vehicle.vehicleStatus = this.vehicleForm.value.vehicleStatus
    // this.vehicle.category = this.vehicleForm.value.category
    // this.vehicle.seatCapacity = this.vehicleForm.value.seatCapacity
    console.log("au clique ajouter je récupère : " , this.vehicle);
    this.addVehicle(this.vehicle)
}


  ////////////////////////////////////////////// AddVehicle ///////////////////////////////////////////////////

  addVehicle(vehicle: Vehicle){
    console.log('create-update', vehicle)
   this.vehiclesWebService.addVehicle(vehicle).subscribe();
   };

}
