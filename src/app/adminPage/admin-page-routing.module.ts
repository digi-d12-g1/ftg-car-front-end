import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateEmployeeComponent } from '../shared/components/employees/create-update/create-update.component';
import { ListEmployeesComponent } from '../shared/components/employees/list/listEmployees.component';
import { CreateUpdateVehicleComponent } from '../shared/components/vehicles/create-update/create-update.component';
import { ListVehiclesComponent } from '../shared/components/vehicles/list/listVehicles.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [{
  path: '',
  component: AdminPageComponent,

  children: [
    {
      path: '',
      component: HomeComponent
    },

    {
    path: 'vehicles',
    component: ListVehiclesComponent
    },
    {
      path: 'create-update',
      component: CreateUpdateVehicleComponent
    },
    //TODO : repasser sur les routes Employee (ne marche pas encore)
    {
      path: 'users',
      component: ListEmployeesComponent,
    },
    {
      path: 'create-update',
      component: CreateUpdateEmployeeComponent
    }
  ]
}];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
