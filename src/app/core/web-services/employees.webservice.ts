import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "src/app/shared/models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeesWebService {

  urlBack: string;
  any: any;

    constructor(private http: HttpClient) {
      this.urlBack = 'http://localhost:4444/api/employees/';

    }

////////////////////////////////////////////// getAllEmployees ///////////////////////////////////////////////////

getAllEmployees(): Observable<Employee[]>{
  return this.http.get<Employee[]>(this.urlBack + 'findAll');
}


////////////////////////////////////////////// addNewEmployee ///////////////////////////////////////////////////

addNewEmployee(newEmployee: Employee) {
  return this.http.post<Employee>(this.urlBack + 'add', newEmployee);
}


////////////////////////////////////////////// deleteEmployeeById ///////////////////////////////////////////////////

deleteEmployeeById(idEmployee: number) {
  return this.http.delete<number>(this.urlBack + 'delete/' + idEmployee);
}

////////////////////////////////////////////// updateEmployee ///////////////////////////////////////////////////

updateEmployee(updatedEmployee: Employee) {
  return this.http.put<Employee>(this.urlBack + 'update/', updatedEmployee);
}



}
