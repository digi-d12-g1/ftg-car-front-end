import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/core/auth/services/token-storage.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  constructor(private tokenStorageService: TokenStorageService) {}


}
