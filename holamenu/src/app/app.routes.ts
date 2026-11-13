import { Routes } from '@angular/router';
import { ViewProductos } from './cu/administrar-productos/view-productos/view-productos';
import { ViewServicio } from './cu/administrar-servicio/view-servicio/view-servicio';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ViewProductos, title: 'Vista de productos' },
  { path: 'servicios', component: ViewServicio, title: 'Vista de servicios' },
  { path: '**', redirectTo: 'productos' },
];