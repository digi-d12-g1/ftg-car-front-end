import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from '../adminPage/components/admin-page/admin-page.component';
import { AuthComponent } from '../auth/auth.component';
import { ListVehiclesComponent } from '../shared/components/vehicles/list/listVehicles.component';

const routes: Routes = [
  {
    // TODO : revoir ce path ultérieurement
    path: '',
    component: AuthComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    loadChildren: () => import('../adminPage/admin-page.module').then(m => m.AdminPageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
