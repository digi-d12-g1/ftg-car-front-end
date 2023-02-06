import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreRoutingModule } from './core-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CoreModule {

  /*
     Permet de placer le CoreModule en parent de tous les autres modules, si un autre module est

     importé dans le appModule l'application rentrera en conflit (mesure de sécurité)
  */

     constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

      if (parentModule) {

        throw new Error('CoreModule is already loaded.');

      }

    }

}

