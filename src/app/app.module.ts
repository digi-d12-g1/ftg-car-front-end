import {CommonModule, registerLocaleData} from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './core/auth/auth.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,

  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
