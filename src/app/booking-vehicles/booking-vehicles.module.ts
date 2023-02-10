import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehiclesListComponent} from './components/vehicles-list/vehicles-list.component';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
  NgbDatepickerModule,
  NgbTimepickerModule
} from "@ng-bootstrap/ng-bootstrap";
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
    NgbTimepickerModule
  ],
  providers: [NgbCarouselConfig]
})
export class BookingVehiclesModule { }
