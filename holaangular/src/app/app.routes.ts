import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
  { path: '', component: Inicio, title: 'Inicio | Super Fresh' },
  { path: 'productos', component: Productos, title: 'Productos | Super Fresh' },
  { path: '**', component: NoEncontrado, title: 'Página no encontrada' },
];