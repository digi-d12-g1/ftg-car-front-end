import { Employee } from "./employee";

export class AdvertCarpooling {
    id?: number;
    departure?: Date;
    departureAdress?: string;
    arrivalAdress?: string;
    seatAvailable?: number;
    idEmployee?: Employee;
    
    constructor(
        id?: number,
        departure?: Date,
        departureAdress?: string,
        arrivalAdress?: string,
        seatAvailable?: number,
        idEmployee?: Employee) {
        this.id = id;
        this.departure = departure;
        this.departureAdress = departureAdress;
        this.arrivalAdress = arrivalAdress;
        this.seatAvailable = seatAvailable;
        this.idEmployee = idEmployee;
    }
}