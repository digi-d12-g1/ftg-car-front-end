import { AdvertCarpooling } from "./advert-carpooling";
import { Employee } from "./employee";
import { MainModel } from "./main-model";

export class BookingCarpooling extends MainModel {

  public idAdvertCarpooling: AdvertCarpooling;
  public idEmployee: Employee;

  constructor(idAdvertCarpooling: AdvertCarpooling, idEmployee: Employee) {
    super();
    this.idAdvertCarpooling = idAdvertCarpooling
    this.idEmployee = idEmployee;
  }

}
