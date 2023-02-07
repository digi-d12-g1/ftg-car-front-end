import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavButtonComponent } from './nav-button/nav-button.component';


@NgModule({
  declarations: [
    NavButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavButtonComponent
  ]
})
export class SharedModule { }
