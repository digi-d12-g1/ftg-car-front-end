import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/my-booking/booking.component';
import { CarpoolingComponent } from './components/my-carpooling/carpooling.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import {BookingVehiclesModule} from "./components/booking-vehicles/booking-vehicles.module";


@NgModule({
  declarations: [
    HomeComponent,
    BookingComponent,
    CarpoolingComponent,
    ProfilPageComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    BookingVehiclesModule
  ]
})
export class ProfilModule { }
