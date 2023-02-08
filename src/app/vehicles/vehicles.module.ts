import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './components//list/vehicles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class VehiclesModule { }
