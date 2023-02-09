import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({

  declarations: [
    AdminPageComponent
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
