import {Vehicle} from "./vehicle";
import {MainModel} from "./main-model";
import {Employee} from "./employee";

export class BookingVehicle extends MainModel{
  public departure: Date;
  public arrival: Date;
  public idVehicle: Vehicle;
  public idEmployee: Employee;


  constructor(departure: Date, arrival: Date, vehicle: Vehicle, employee: Employee) {
    super();
    this.departure = departure;
    this.arrival = arrival;
    this.idVehicle = vehicle;
    this.idEmployee = employee;
  }
}
