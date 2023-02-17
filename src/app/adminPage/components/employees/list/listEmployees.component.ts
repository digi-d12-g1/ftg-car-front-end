import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesWebService } from 'src/app/core/web-services/employees.webservice';
import { Employee } from 'src/app/shared/models/employee';
import { UpdateEmployeeService } from 'src/app/shared/services/update-employee/update-employee.service';

@Component({
  selector: 'app-listEmployees',
  templateUrl: './listEmployees.component.html',
  styleUrls: ['./listEmployees.component.scss']
})

export class ListEmployeesComponent implements OnInit {

  employeeList: Employee[] = [];
  employeeId!: number;
fromUpdate: boolean = false;

  constructor(
    private employeesWebService: EmployeesWebService,
    private updateEmployeeService: UpdateEmployeeService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.fromUpdate = this.route.snapshot.params['fromUpdate'];
    this.getAllEmployees();
  }

  ////////////////////////////////////////////// Find All ///////////////////////////////////////////////////
  getAllEmployees() {
    this.employeesWebService.getAllEmployees().subscribe(data => {
      this.employeeList = data;
    });
  }

  deleteEmployeeById(idEmployee: any) {
    this.employeeId = +idEmployee // le + ici parse le any en number
    this.employeesWebService.deleteEmployeeById(this.employeeId).subscribe();
  }

  updateEmployee(employeeToUpdate: Employee) {
    this.updateEmployeeService.sendEmployeeToUpdate(employeeToUpdate);
    console.log('data :', employeeToUpdate)
  }

}
