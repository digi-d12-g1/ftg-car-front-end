import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { VehiclesComponent } from '../vehicles/components/vehicles.component';
import {VehiclesListComponent} from "../booking-vehicles/components/vehicles-list/vehicles-list.component";

const routes: Routes = [
  {
    // TODO : revoir ce path ultérieurement
    path: '',
    component: AuthComponent
  },
  {
    path: 'vehicle',
    component: VehiclesComponent,
    loadChildren: () => import('../vehicles/vehicles.module').then(m => m.VehiclesModule)
  },
  {
    path: 'booking',
    component: VehiclesListComponent,
    loadChildren: () => import('../booking-vehicles/booking-vehicles.module').then(m => m.BookingVehiclesModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('../profil/profil.module').then(m => m.ProfilModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
