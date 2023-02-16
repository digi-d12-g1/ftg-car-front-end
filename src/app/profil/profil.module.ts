import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BookingComponent } from './components/my-booking/booking.component';
import { CarpoolingComponent } from './components/my-carpooling/carpooling.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { BookingVehiclesComponent } from './components/booking-vehicles/components/booking-vehicles/booking-vehicles.component';
import { FormsModule } from '@angular/forms';
import { NgbCarouselConfig, NgbCarouselModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { VehiclesListComponent } from './components/booking-vehicles/components/vehicles-list/vehicles-list.component';
import { BookingCarpoolingComponent } from './components/booking-carpooling/components/booking-carpooling/booking-carpooling.component';


@NgModule({
  declarations: [
    HomeComponent,
    BookingComponent,
    CarpoolingComponent,
    ProfilPageComponent,
    VehiclesListComponent,
    BookingVehiclesComponent,
    BookingCarpoolingComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
     NgbCarouselModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    SharedModule
  ],
  providers: [NgbCarouselConfig]
})
export class ProfilModule { }
