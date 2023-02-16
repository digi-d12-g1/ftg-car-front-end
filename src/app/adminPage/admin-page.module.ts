import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreateUpdateEmployeeComponent } from './components/employees/create-update/create-update.component';
import { ListEmployeesComponent } from './components/employees/list/listEmployees.component';
import { HomeComponent } from './components/home/home.component';
import { CreateUpdateVehicleComponent } from './components/vehicles/create-update/create-update.component';
import { ListVehiclesComponent } from './components/vehicles/list/listVehicles.component';


@NgModule({

  declarations: [
    AdminPageComponent,
    HomeComponent,

     //Vehicles
     ListVehiclesComponent,
     CreateUpdateVehicleComponent,

     //Employees
     ListEmployeesComponent,
     CreateUpdateEmployeeComponent
  ],

  imports: [
    AdminPageRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule


  ]
})
export class AdminPageModule { }
