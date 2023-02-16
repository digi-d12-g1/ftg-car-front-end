import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/my-booking/booking.component';
import { CarpoolingComponent } from './components/my-carpooling/carpooling.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import {
  BookingVehiclesComponent
} from "./components/booking-vehicles/components/booking-vehicles/booking-vehicles.component";
import { BookingCarpoolingComponent } from './components/booking-carpooling/components/booking-carpooling/booking-carpooling.component';

const routes: Routes = [
  { path: '', component: ProfilPageComponent ,
  children: [
    { path: '', component: HomeComponent},
    { path: 'booking', component: BookingComponent},
    { path: 'carpooling', component: CarpoolingComponent},
    { path: 'booking-vehicles', component: BookingVehiclesComponent},
    { path: 'booking-carpoolings', component: BookingCarpoolingComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
