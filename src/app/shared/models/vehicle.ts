export class Vehicle {
  id?: number;
  picture?: string;
  numberplate?: string;
  brand?: string;
  model?: string;
  vehiculeStatus?: string;
  category?: string;
  seatCapacity?: number;

  constructor(id?: number,
    picture?: string,
    numberplate?: string,
    brand?: string,
    model?: string,
    vehiculeStatus?: string,
    category?: string,
    seatCapacity?: number) {
      this.id = id;
      this.picture = picture;
      this.numberplate = numberplate;
      this.brand = brand;
      this.model = model;
      this.vehiculeStatus = vehiculeStatus;
      this.category = category;
      this.seatCapacity = seatCapacity;
  }


}
