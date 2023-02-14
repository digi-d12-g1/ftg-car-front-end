import { Employee } from './../../../shared/models/employee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CheckAuthWebService } from '../web-services/checkAuth.webservice';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  employee: Employee = new Employee();
  employeeFromBdd: Employee = new Employee();
  checkIfConnect!: number;
  isLoggedIn = false;
  isLoginFailed = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private chekAuthWebService: CheckAuthWebService,
    private formBuilder: FormBuilder,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
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
    this.chekAuthWebService.getUser(employee).subscribe((data) => {

      this.employeeFromBdd = this.tokenStorage.getUser(); // on récupère l'utilisateur enregistré si connection correctement passée

      this.checkIfConnect = Object.keys(this.employeeFromBdd).length; // on vérifie ici si on a enregistrer un User en token, si longueur <=0 alors l'objet est vide et la co ne s'est pas faites

      if (this.checkIfConnect >= 1) {

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.redirectToAdminOrUser(this.employeeFromBdd);

      } else {

        console.log('------------- Message de l erreur => ', data.message);
        console.log('------------- Raison de l erreur  => ', data.error);
        this.isLoginFailed = true;
        this.isLoggedIn = false;
        console.log('penser à s ocuuper de la non connection et bloquer l accès à admin')
      }
    });

    //this.authService.loginFilter(userData.login, userData.mdp);
  }

  redirectToAdminOrUser(employeeFromBdd: Employee) {
    if (employeeFromBdd.isAdmin) {
      this.router.navigate(['/admin'])
      localStorage.setItem('ACCESS_TOKEN', 'admin');
    } else {
      this.router.navigate(['/profil'])
      localStorage.setItem('ACCESS_TOKEN', 'profil');

    }

  }
}
