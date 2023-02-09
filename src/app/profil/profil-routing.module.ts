import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { CarpoolingComponent } from './components/carpooling/carpooling.component';
import { HomeComponent } from './components/home/home.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';

const routes: Routes = [
  { path: '', component: ProfilPageComponent ,
  children: [
    { path: '', component: HomeComponent},
    { path: 'booking', component: BookingComponent},
    { path: 'carpooling', component: CarpoolingComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }