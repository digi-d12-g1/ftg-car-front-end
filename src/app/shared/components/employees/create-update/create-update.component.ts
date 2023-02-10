import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
  updateEmployeeSubscription!: Subscription;
  employeeId: any;
  faceSnapPreview$!: Observable<Employee>;

  constructor(
    private employeesWebService: EmployeesWebService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getEmployeeToUpdate();
    this.employeeId = this.employee.id;
    //this.updateEmployeeGet();
    this.faceSnapPreview$ = this.employeeForm.valueChanges;
  }


// Reactive form pour modifier / ajouter
  formBuilderAddEmployee() {
    this.employeeForm = this.formBuilder.group({
      username: [null],
      password: [null]
    });
  }

  onSubmitFormToAdd() {
    this.employee = this.employeeForm.value
    this.addEmployee(this.employee)
  }

  addEmployee(employee: Employee){
    this.employeesWebService.addNewEmployee(employee).subscribe();
  };

  private getEmployeeToUpdate() {
    //this.updateEmployeeSubscription = this.upd
  }

  ////////////////////////////////////////////// AddEmployee ///////////////////////////////////////////////////



}
