import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ftg-car-front-end';
  location: Location;

  constructor(location: Location) {
    this.location = location;
  }

  checkUrl() : boolean {
    return this.location.path() !== '';
  }

}
