import { TokenStorageService } from './auth/services/token-storage.service';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPageComponent} from '../adminPage/admin-page/admin-page.component';
import {AuthComponent} from "./auth/components/auth.component";
import { GuardComponent } from './auth/guard/guard.component';
import { AdminGuardComponent } from './auth/guard/guardAdmin.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: AuthComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AdminGuardComponent],
    loadChildren: () => import('../adminPage/admin-page.module').then(m => m.AdminPageModule)
  },
  {
    path: 'profil',
    canActivate: [GuardComponent],
    loadChildren: () => import('../profil/profil.module').then(m => m.ProfilModule)
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
