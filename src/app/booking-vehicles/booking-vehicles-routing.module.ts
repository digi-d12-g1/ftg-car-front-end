import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {VehiclesListComponent} from "./components/vehicles-list/vehicles-list.component";


const routes: Routes = [
  {
    path: '', component: VehiclesListComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BookingVehiclesRoutingModule { }
