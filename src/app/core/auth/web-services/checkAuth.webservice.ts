import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';
import { TokenStorageService } from '../services/token-storage.service';



@Injectable({
  providedIn: 'root',
})
export class CheckAuthWebService {

  urlBack: string;
  infoConnect: Employee = new Employee();

  constructor( private http: HttpClient, private tokenStorageService: TokenStorageService) {

    this.urlBack = 'http://localhost:4444/api/employees/';

  }

  getUser(infoConnect: any): Observable<any> {

    return this.http.post<Employee>( this.urlBack + 'checkAuth/', infoConnect).pipe( map ((answer) => {     // méthode qui permets d'envoyer la donnée vers le TS

          this.isConnect(answer);
          return answer;

        }),

        catchError((error) => {     // gestion d'erreur selon la méthode que l'on a déclaréer en dessous

          return of(error);
        })
      );
  }

  private isConnect(answer: Employee) {
    console.log('méthode token save user', answer);
    return this.tokenStorageService.saveUser(answer);
  }
}
