import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateVehicleComponent } from '../shared/components/vehicles/create-update/create-update.component';
import { ListVehiclesComponent } from '../shared/components/vehicles/list/listVehicles.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';


const routes: Routes = [{
  path: '',
  component: AdminPageComponent,

  children: [
    {
      path: '',
  component: ListVehiclesComponent
    },
    {
      path: 'create-update',
  component: CreateUpdateVehicleComponent
    }
  ]
}];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
