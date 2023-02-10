import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { CarpoolingComponent } from './components/carpooling/carpooling.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    BookingComponent,
    CarpoolingComponent,
    ProfilPageComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
