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
import {SharedModule} from "../../../shared/shared.module";
import {BookingVehiclesComponent} from './components/booking-vehicles/booking-vehicles.component';


@NgModule({
  declarations: [
    VehiclesListComponent,
    BookingVehiclesComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    FormsModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    SharedModule
  ],
  providers: [NgbCarouselConfig]
})
export class BookingVehiclesModule { }
