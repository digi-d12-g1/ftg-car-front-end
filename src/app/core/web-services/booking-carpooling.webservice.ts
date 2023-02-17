import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AdvertCarpooling } from "src/app/shared/models/advert-carpooling";
import { BookingCarpooling } from "src/app/shared/models/booking-carpooling";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BookingCarpoolingWebService {

  private baseUrl = environment.apiUrl + '/booking-advert-carpoolings';
  carpooling: BehaviorSubject<AdvertCarpooling> = new BehaviorSubject(new AdvertCarpooling);

  constructor(private httpClient: HttpClient) {

  }

  getCarpoolingObserver(carpoolingFromList: AdvertCarpooling) {
    this.carpooling.next(carpoolingFromList);
  }

  addBooking(booking: BookingCarpooling) {
    this.httpClient.post(this.baseUrl + '/book', booking).subscribe();
  }


  // find by id employee
  getAllBookingCarpoolingWithIdEmployee(idEmployee: number) {
    return this.httpClient.get<BookingCarpooling[]>(this.baseUrl + '/findByEmployee/' + idEmployee);
  }

}
