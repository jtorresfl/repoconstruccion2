import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceAdministrarProductos } from '../services/service-administrar-productos';

@Component({
  selector: 'app-view-producto-nuevo',
  imports: [FormsModule],
  templateUrl: './view-producto-nuevo.html',
  styleUrl: './view-producto-nuevo.css',
})
export class ViewProductoNuevo {
  private serviceAdministrarProductos = inject(ServiceAdministrarProductos);
  private router = inject(Router);

  producto = {
    nombre: '',
    precio: 0,
    stock: 0,
    descripcion: ''
  };

  guardar(): void {
    this.serviceAdministrarProductos.registrarProducto(this.producto).subscribe({
      next: (data) => {
        console.log('Producto registrado:', data);
        this.router.navigate(['/productos']);
      },
      error: (err) => console.error('Error al llamar al servicio:', err),
    });
  }

  limpiar(): void {
    this.producto = { nombre: '', precio: 0, stock: 0, descripcion: '' };
  }
}