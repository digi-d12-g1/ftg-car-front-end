import {MainModel} from "./main-model";

export class Employee extends MainModel {
  public username?: string;
  public password?: string;
  public isAdmin?: boolean;




  constructor(username?: string, password?: string, id?: number, isAdmin?: boolean, error?: any, errorMessage?: string, errorCode?: string) {
    super(id, error, errorMessage, errorCode);
    this.username = username;
    this.password = password;
    this.isAdmin = isAdmin;
  }
}
