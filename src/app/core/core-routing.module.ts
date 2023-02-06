import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from '../vehicles/components/vehicles.component';

const routes: Routes = [
  {
    // TODO : revoir ce path ultérieurement
    path: '',
    component: VehiclesComponent
  },
  {
    path: 'vehicle',
    component: VehiclesComponent,
    loadChildren: () => import('../vehicles/vehicles.module').then(m => m.VehiclesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
