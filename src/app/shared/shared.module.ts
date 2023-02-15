import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateVehicleComponent } from './components/vehicles/create-update/create-update.component';
import { ListVehiclesComponent } from './components/vehicles/list/listVehicles.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmployeesComponent } from './components/employees/list/listEmployees.component';
import { CreateUpdateEmployeeComponent } from './components/employees/create-update/create-update.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';


@NgModule({
  declarations: [
    NavButtonComponent,

    //Vehicles
    ListVehiclesComponent,
    CreateUpdateVehicleComponent,

    //Employees
    ListEmployeesComponent,
    CreateUpdateEmployeeComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,


  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    NavButtonComponent,

    //Vehicles
    ListVehiclesComponent,
    CreateUpdateVehicleComponent,

    //Employees
    ListEmployeesComponent,
    CreateUpdateEmployeeComponent
  ]
})
export class SharedModule { }
