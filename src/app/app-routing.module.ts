import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SessionComponent } from './layout/public/session.component';
import { ContenidoComponent } from './layout/private/principal/contenido.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
  { path: 'auth', component: SessionComponent, loadChildren:()=>import('./modules/login/login.module').then(m=>m.loginModule)},
  { path: 'pokemon', component: ContenidoComponent, loadChildren:()=>import('./modules/home/home.module').then(m=>m.homeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
