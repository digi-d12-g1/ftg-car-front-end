import { Employee } from './../../../shared/models/employee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CheckAuthWebService } from '../web-services/checkAuth.webservice';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm!: FormGroup;
  employee: Employee = new Employee;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor( private authService: AuthService,
    private router: Router,
    private chekAuthWebService: CheckAuthWebService,
    private formBuilder: FormBuilder) {

  }


  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void  {
    this.authForm = this.formBuilder.group({
      username: [null],
      password: [null],
    });
  }

  get formControls() {
    return this.authForm.controls;
  }

onSubmit() {
  console.log(this.authForm.value);
}


logIn() {

    this.employee = this.authForm.value;
this.checkAuth(this.employee);
}

checkAuth(employee: Employee) {
this.chekAuthWebService.getUser(employee).subscribe( data => {

  // this.authForm.saveToken(data.accessToken);
  // this.authForm.saveUser(data);
  if (localStorage.getItem('ACCESS_TOKEN') == null) {
    console.log('Ca marche l auth', data);
  this.isLoginFailed = false;
  this.isLoggedIn = true;
  } else {
    console.log('message d erreur' , data.message)
    console.log('raison de lerreur', data.error)
    this.isLoginFailed = true;
  this.isLoggedIn = false;
  }


}
);

    //this.authService.loginFilter(userData.login, userData.mdp);
}








}
