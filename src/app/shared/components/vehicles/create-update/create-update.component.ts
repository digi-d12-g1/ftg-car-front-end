import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { VehiclesWebService } from 'src/app/core/web-services/vehicles.webservice';
import { Vehicle } from 'src/app/shared/models/vehicle';
import { UpdateVehicleService } from 'src/app/shared/services/update-vehicle/update-vehicle.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateVehicleComponent implements OnInit {


  vehicleForm!: FormGroup;
vehicle: Vehicle = new Vehicle;
updateVehicleSubscription!: Subscription;
vehicleId: any;
faceSnapPreview$!: Observable<Vehicle>;

  // id!: number;
  // isNew: Boolean = false;


  constructor(
    private updateVehicleService: UpdateVehicleService,
    private vehiclesWebService: VehiclesWebService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
//     this.vehicle = this.route.snapshot.params['vehicle'];
// console.log('teste recéption objet', this.vehicle)

      // this.formBuilderAddVehicle();


this.getVehicleToUpdate();
console.log('vehicle à modifier : ' , this.vehicle.id)
this.vehicleId = this.vehicle.id;
this.updateVehicleGet();
this.faceSnapPreview$ = this.vehicleForm.valueChanges;

  }

  onSubmit(): void {
    console.log(' objet ajouter', this.vehicleForm.value);
  }


////////////////////////////////////////////// AddVehicle ///////////////////////////////////////////////////

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

  onSubmitFormToAdd() {
    this.vehicle = this.vehicleForm.value
    this.addVehicle(this.vehicle)
}

  addVehicle(vehicle: Vehicle){
   vehicle.id = 0;
   this.vehiclesWebService.addVehicle(vehicle).subscribe();
  };


  ////////////////////////////////////////////// Update Vehicle GET ///////////////////////////////////////////////////
  private getVehicleToUpdate() {    // méthode observable pour récupérer le vicule à modifier de la liste
    this.updateVehicleSubscription = this.updateVehicleService.vehicleService.subscribe( (data: Vehicle) => {
      this.vehicle = data;

    }
  );
}

// Reactive form pour modifier / ajouter

onSubmitFormToUpdate() {
  this.vehicle = this.vehicleForm.value
  this.updateVehiclePost(this.vehicle )
}

updateVehicleGet() {
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

  ////////////////////////////////////////////// Update Vehicle POST ///////////////////////////////////////////////////

  updateVehiclePost(vehicle: Vehicle){
    vehicle.id = this.vehicleId // on rajoute l'id de l'objet reçu grâce au subject Behavior sinon pas d'id en venant du template
    this.vehiclesWebService.updateVehicle(vehicle).subscribe();
    };





    private ngOnDestroy() {      // obligatoire dans chaque onglet dès qu'on a une variable : Subscription, va fermer l'observable à la fermeture de l'onglet
      console.log("UNSUBSCRIBE")  // permets d'optimiser la gestion débit de données
      this.updateVehicleSubscription.unsubscribe();
    }
}
