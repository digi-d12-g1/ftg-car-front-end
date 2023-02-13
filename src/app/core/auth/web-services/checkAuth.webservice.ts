import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthWebService {

urlBack: string;
// infoConnect: Employee = new Employee;

  constructor(private http: HttpClient) {
    this.urlBack = 'http://localhost:4444/api/employees/';
  }

  ////////////////////////////////////////////// Find All ///////////////////////////////////////////////////



  getUser(infoConnect: Employee): Observable<Employee>{
    console.log('web service Auth', infoConnect)
    return this.http.post<Employee>(this.urlBack + 'checkAuth' , infoConnect);
  }



}
