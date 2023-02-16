import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { EmployeesWebService } from 'src/app/core/web-services/employees.webservice';
import { Employee } from 'src/app/shared/models/employee';
import { UpdateEmployeeService } from 'src/app/shared/services/update-employee/update-employee.service';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;
  employee: Employee = new Employee;
  updateEmployeeSubscription!: Subscription;
  employeeId: any;
  faceSnapPreview$!: Observable<Employee>;

  constructor(
    private updateEmployeeService: UpdateEmployeeService,
    private employeesWebService: EmployeesWebService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getEmployeeToUpdate();
    console.log('employee à modifier : ' , this.employee.id)
    this.employeeId = this.employee.id;
    this.formBuilderAddOrUpdateEmployee();
    this.employee.isAdmin = false;
    this.faceSnapPreview$ = this.employeeForm.valueChanges;
  }

  onSubmit(): void {
    console.log('Ajout avec succès : ', this.employeeForm.value);
  }

  private getEmployeeToUpdate() {
    this.updateEmployeeSubscription = this.updateEmployeeService.employeeService.subscribe( (data: Employee) => {
      this.employee = data;
    })
    console.log('id de employee : ', this.employee.id)
  }

  formBuilderAddOrUpdateEmployee() {
    this.employeeForm = this.formBuilder.group({
      username: [null],
      password: [null],
      isAdmin: [null]
    });
  }

  onSubmitFormToAdd() {
    this.employee = this.employeeForm.value
    this.addEmployee(this.employee)
  }

  onSubmitFormToUpdate() {
    this.employee = this.employeeForm.value
    this.updateEmployeePost(this.employee);
  }

  updateEmployeePost(employee: Employee) {
    employee.id = this.employeeId
    this.employeesWebService.updateEmployee(employee).subscribe();
  }

  addEmployee(employee: Employee){
    employee.id = 0;
    this.employeesWebService.addNewEmployee(employee).subscribe();
  };

}
