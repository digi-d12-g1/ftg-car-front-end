import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee';
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
      login: [null],
      mdp: [null],
    });
  }

logIn() {
   this.authService.login();
    this.router.navigateByUrl('/admin');

    this.employee = this.authForm.value;
    // this.chekAuthWebService.getUser(userData).subscribe(data => {
    //   console.log('fnjvnfljnlkdnlfnl', data);
    // });

    //this.authService.loginFilter(userData.login, userData.mdp);
}

  onSubmit(): void  {
console.log(this.authForm)
  }

}
