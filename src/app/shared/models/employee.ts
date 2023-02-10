import {MainModel} from "./main-model";

export class Employee extends MainModel {
  public username: string;
  public password: string;


  constructor(username: string, password: string, id?: number) {
    super(id);
    this.username = username;
    this.password = password;
  }
}
