import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdvertCarpooling } from '../../models/advert-carpooling';

@Injectable({
  providedIn: 'root'
})
export class UpdateCarpoolingService {

  carpoolingService: BehaviorSubject<AdvertCarpooling> = new BehaviorSubject(new AdvertCarpooling);


sendCarpoolingToUpdate(carpoolingFromListCarpooling: AdvertCarpooling) {
  this.carpoolingService.next(carpoolingFromListCarpooling);
}


}
