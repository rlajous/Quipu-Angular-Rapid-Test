import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: ListComponent,
    data: { title: 'Búsqueda' }
  },
  {
    path: 'help',
    component: ListComponent,
    data: { title: 'Ayuda' }
  },
  {
    path: 'new',
    component: ListComponent,
    data: { title: 'Mis Negocios' }
  },
  {
    path: 'purchases',
    component: ListComponent,
    data: { title: 'Consultas y Compras' }
  },
  {
    path: 'notifications',
    component: ListComponent,
    data: { title: 'Notificaciones' }
  },
  {
    path: 'profile',
    component: ListComponent,
    data: { title: 'Mi Perfil' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
