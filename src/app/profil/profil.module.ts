import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { CarpoolingComponent } from './carpooling/carpooling.component';


@NgModule({
  declarations: [
    HomeComponent,
    BookingComponent,
    CarpoolingComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
