import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateEmployeeComponent } from './components/employees/create-update/create-update.component';
import { ListEmployeesComponent } from './components/employees/list/listEmployees.component';
import { CreateUpdateVehicleComponent } from './components/vehicles/create-update/create-update.component';
import { ListVehiclesComponent } from './components/vehicles/list/listVehicles.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
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
      path: 'vehicles/create-update',
      component: CreateUpdateVehicleComponent
    },
    {
      path: 'employees',
      component: ListEmployeesComponent,
    },
    {
      path: 'employees/create-update',
      component: CreateUpdateEmployeeComponent
    }
  ]
}];





@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
