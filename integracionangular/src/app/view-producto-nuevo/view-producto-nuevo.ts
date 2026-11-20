import { Component, inject } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { ServiceAdministrarProductos } from '../services/service-administrar-productos';

@Component({
  selector: 'app-view-producto-nuevo',
  imports: [FormsModule],
  templateUrl: './view-producto-nuevo.html',
  styleUrl: './view-producto-nuevo.css',
})
export class ViewProductoNuevo {

  private serviceAdministrarProductos = inject(ServiceAdministrarProductos);

  producto = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: ''
  };

  guardar(): void {
    console.log('Producto a guardar:', this.producto);
    this.serviceAdministrarProductos.registrarProducto(this.producto).subscribe({
        next: (data) => console.log('Datos recibidos del servicio:', data),
        error: (err) => console.error('Error al llamar al servicio:', err),
    });
  }

  limpiar(): void {
    this.producto = {
      nombre: '',
      precio: 0,
      stock: 0,
      descripcion: ''
    };
  }
}