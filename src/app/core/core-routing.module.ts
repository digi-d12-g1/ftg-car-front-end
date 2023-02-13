import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from '../adminPage/components/admin-page/admin-page.component';
import {VehiclesListComponent} from "../booking-vehicles/components/vehicles-list/vehicles-list.component";
import {AuthComponent} from "./auth/auth.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    // TODO : revoir ce path ultérieurement
    path: '',
    component: AuthComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthComponent],
    loadChildren: () => import('../adminPage/admin-page.module').then(m => m.AdminPageModule)
  },
  {
    path: 'booking',
    component: VehiclesListComponent,
    loadChildren: () => import('../booking-vehicles/booking-vehicles.module').then(m => m.BookingVehiclesModule)
  },
  {
    path: 'profil',
    canActivate: [AuthComponent],
    loadChildren: () => import('../profil/profil.module').then(m => m.ProfilModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
