import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',  redirectTo: 'login', pathMatch: 'full'},
  {path : 'home', loadChildren: () => import('./modules').then(m => m.HomeModule)},
  {path : 'login', loadChildren: () => import('./modules').then(m => m.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
