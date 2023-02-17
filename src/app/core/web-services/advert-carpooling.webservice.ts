import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdvertCarpooling } from 'src/app/shared/models/advert-carpooling';
import { BookingCarpooling } from 'src/app/shared/models/booking-carpooling';

@Injectable({
    providedIn: 'root'
})
export class AdvertCarpoolingWebService {

urlBack: string;
test:any;

  constructor(private http: HttpClient) {
          this.urlBack = 'http://localhost:4444/api/advert-carpoolings/';
        }


  getAllCarpoolingWithIdEmployee(idEmployee: number): Observable<any> {
    return this.http.get('http://localhost:4444/api/advert-carpoolings/findOpenedAdverts/' + idEmployee);
  }

  getAllBookingWithIdEmployee(idEmployee: number): Observable<any> {
    return this.http.get('http://localhost:4444/api/booking-advert-carpoolings/findAll/' + idEmployee);
  }

  getAllAdvertCarpoolingsBetweenDates(dateBegin: Date){
      return this.http.get<any>(this.urlBack + `findAllBeginDate/${dateBegin}`);
  }
}
