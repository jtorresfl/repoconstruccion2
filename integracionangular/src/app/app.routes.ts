import { Routes } from '@angular/router';
import { ViewProductos } from './view-productos/view-productos';
import { ViewProductoNuevo } from './view-producto-nuevo/view-producto-nuevo';

export const routes: Routes = [
  { path: '', redirectTo: 'productos', pathMatch: 'full' },
  { path: 'productos', component: ViewProductos, title: 'Listado de productos' },
  { path: 'producto/nuevo', component: ViewProductoNuevo, title: 'Producto nuevo' },
  { path: '**', redirectTo: 'productos' },
];