import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateVehicleComponent } from '../adminPage/components/vehicles/create-update/create-update.component';
import { ListVehiclesComponent } from '../adminPage/components/vehicles/list/listVehicles.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListEmployeesComponent } from '../adminPage/components/employees/list/listEmployees.component';
import { CreateUpdateEmployeeComponent } from '../adminPage/components/employees/create-update/create-update.component';
import { NavButtonComponent } from './components/nav-button/nav-button.component';


@NgModule({
  declarations: [
    NavButtonComponent,



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


  ]
})
export class SharedModule { }
