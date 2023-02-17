import { Employee } from './../../../shared/models/employee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckAuthWebService } from '../web-services/checkAuth.webservice';
import { TokenStorageService } from '../services/token-storage.service';
import { IsConnectService } from '../services/isConect.service';

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
  isLoggedIn: boolean = false;
  errorMessage: any;
  isLoginFailed: boolean = false;
  neverTry: boolean = true;
  ;

  constructor(
    private isConnectService: IsConnectService,
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
        this.redirectToAdminOrUser(this.employeeFromBdd);
        // this.isConnectSendToService(this.isLoggedIn = true);

      } else {

        console.log('------------- Message de l erreur => ', data.message);
        console.log('------------- Raison de l erreur  => ', data.error);
        this.isLoginFailed = true;
        this.neverTry = false;
        this.errorMessage = data.error;
        // this.isConnectSendToService(this.isLoggedIn = false);
      }
    });

  }

  private redirectToAdminOrUser(employeeFromBdd: Employee) { // méthode pour créer token admin ou profil pour contrôle d'accès des pages

    if (employeeFromBdd.isAdmin) {
      this.router.navigate(['/admin'])
      this.tokenStorage.saveToken('admin');
    } else {
      this.router.navigate(['/profil'])
      this.tokenStorage.saveToken('profil');
    }
  }


  private isConnectSendToService(isConnect: boolean) {    // méthode observable pour récupérer dans l'app si on est connect
    this.isConnectService.getIsConnect(isConnect);
}
}
