import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeesWebService } from 'src/app/core/web-services/employees.webservice';
import { Employee } from 'src/app/shared/models/employee';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  employee: Employee = new Employee;

  constructor(private employeesWebService: EmployeesWebService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formBuilderAddEmployee();
  }


// Reactive form pour modifier / ajouter
  formBuilderAddEmployee() {
    this.employeeForm = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  onSubmitForm() {
    this.employee = this.employeeForm.value
    this.addEmployee(this.employee)
  }


  ////////////////////////////////////////////// AddEmployee ///////////////////////////////////////////////////

  addEmployee(employee: Employee){
    this.employeesWebService.addNewEmployee(employee).subscribe();
  };

}
