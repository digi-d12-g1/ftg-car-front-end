import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehiclesListComponent} from './components/vehicles-list/vehicles-list.component';
import {NgbCarouselConfig, NgbCarouselModule, NgbDatepickerModule, NgbTimepicker} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    VehiclesListComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTimepicker
  ],
  providers: [NgbCarouselConfig]
})
export class BookingVehiclesModule { }
