import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Employee } from "../../models/employee";

@Injectable({
  providedIn: 'root'
})
export class UpdateEmployeeService {

  employeeService: BehaviorSubject<Employee> = new BehaviorSubject(new Employee);

  sendEmployeeToUpdate(employeeFromListEmployee: Employee) {
    this.employeeService.next(employeeFromListEmployee);
  }

}
