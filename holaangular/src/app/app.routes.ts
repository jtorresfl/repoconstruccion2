import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Productos } from './productos/productos';
import { Formulario } from './formulario/formulario';
import { NoEncontrado } from './no-encontrado/no-encontrado';

export const routes: Routes = [
  { path: '', component: Inicio, title: 'Inicio | Super Fresh' },
  { path: 'productos', component: Productos, title: 'Productos | Super Fresh' },
  { path: 'formulario', component: Formulario, title: 'Formulario | Super Fresh' },
  { path: '**', component: NoEncontrado, title: 'Página no encontrada' },
];