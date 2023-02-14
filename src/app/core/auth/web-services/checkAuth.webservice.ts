import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Employee } from 'src/app/shared/models/employee';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CheckAuthWebService {

urlBack: string;
infoConnect: Employee = new Employee;

  constructor(private http: HttpClient) {
    this.urlBack = 'http://localhost:4444/api/employees/';
  }


  getUser(infoConnect: any): Observable<any>{

    return this.http.post<Employee>(this.urlBack + 'checkAuth/' , infoConnect).pipe(map((answer) => {                       // méthode qui permets d'envoyer la donnée vers le TS

      console.log('ça marche', answer)
      //this.estConnecte();
      return answer;
    }),
      catchError((error) => {                                                    // gestion d'erreur selon la méthode que l'on a déclaréer en dessous
        console.log('Erreur API listAddresses :', error);

        return of(error);
      })
    );;
  }



  // public estConnecte(){
  //   return localStorage.setItem('ACCESS_TOKEN');
  // }

  public deconnecter(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
