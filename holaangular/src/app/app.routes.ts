import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
  { path: '', component: Inicio, title: 'Inicio | Supermercado Fresco' },
  { path: 'productos', component: Productos, title: 'Productos | Supermercado Fresco' },
  { path: '**', component: NoEncontrado, title: 'Página no encontrada' },
];