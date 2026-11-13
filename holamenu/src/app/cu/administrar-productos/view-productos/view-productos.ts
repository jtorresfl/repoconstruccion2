import { Component } from '@angular/core';
import { ModalProducto } from '../modal-producto/modal-producto';

@Component({
  selector: 'app-view-productos',
  imports: [ModalProducto],
  templateUrl: './view-productos.html',
  styleUrl: './view-productos.css',
})
export class ViewProductos {

  productos: any[] = [
    { id: 1, nombre: 'Laptop Pro', precio: 1200, disponible: true },
    { id: 2, nombre: 'Teclado Mecánico', precio: 85, disponible: true },
    { id: 3, nombre: 'Monitor 4K', precio: 350, disponible: false },
    { id: 4, nombre: 'Ratón Ergonómico', precio: 45, disponible: true }
  ];

  mostrarModal = false;
  productoSeleccionado: any = null;

  editarProducto(producto: any) {
    this.productoSeleccionado = { ...producto };
    this.mostrarModal = true;
  }

  guardarProducto(producto: any) {
    this.productos = this.productos.map(p =>
      p.id === producto.id ? producto : p
    );
    console.log('Producto guardado:', producto);
    this.cerrarModal();
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.productoSeleccionado = null;
  }
}