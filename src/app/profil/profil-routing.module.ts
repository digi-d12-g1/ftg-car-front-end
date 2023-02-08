import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CarpoolingComponent } from './carpooling/carpooling.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'booking', component: BookingComponent},
  { path: 'carpooling', component: CarpoolingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
