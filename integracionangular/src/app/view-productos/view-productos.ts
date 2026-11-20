import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { ServiceAdministrarProductos } from '../services/service-administrar-productos';

@Component({
  selector: 'app-view-productos',
  imports: [],
  templateUrl: './view-productos.html',
  styleUrl: './view-productos.css',
})
export class ViewProductos {

  private router = inject(Router);

  productos!: any[];

  mostrarModal = false;

  private serviceAdministrarProductos = inject(ServiceAdministrarProductos);

  ngOnInit(): void {
    this.serviceAdministrarProductos.getProductos().subscribe({
    next: (data) => console.log('Datos recibidos del servicio:', data),
    error: (err) => console.error('Error al llamar al servicio:', err),
    });
  }

irAProductoNuevo() {
  this.router.navigate(['/producto/nuevo']);
}

}