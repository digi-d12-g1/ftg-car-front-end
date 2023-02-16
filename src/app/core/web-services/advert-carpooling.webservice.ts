import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdvertCarpoolingWebService {
    
        constructor(private http: HttpClient) { }
    
        getAllCarpoolingWithIdEmployee(idEmployee: number): Observable<any> {
            return this.http.get('http://localhost:4444/api/advert-carpoolings/findOpenedAdverts/' + idEmployee);
        }

        getAllBookingWithIdEmployee(idEmployee: number): Observable<any> {
            return this.http.get('http://localhost:4444/api/booking-advert-carpoolings/findAll/' + idEmployee);
        }


}