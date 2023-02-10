import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesWebService } from 'src/app/core/web-services/employees.webservice';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-listEmployees',
  templateUrl: './listEmployees.component.html',
  styleUrls: ['./listEmployees.component.scss']
})

export class ListEmployeesComponent implements OnInit {

  employeeList: Employee[] = [];
  employeeId!: number;

  constructor(private employeesWebService:EmployeesWebService, private router: Router) {

  }

  ngOnInit(): void {
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

}
