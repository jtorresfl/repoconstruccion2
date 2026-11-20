import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceAdministrarProductos } from '../services/service-administrar-productos';

@Component({
  selector: 'app-view-productos',
  imports: [],
  templateUrl: './view-productos.html',
  styleUrl: './view-productos.css',
})
export class ViewProductos implements OnInit {
  private router = inject(Router);
  private serviceAdministrarProductos = inject(ServiceAdministrarProductos);

  productos = signal<any[]>([]);

  ngOnInit(): void {
    this.serviceAdministrarProductos.getProductos().subscribe({
      next: (data) => this.productos.set(data),
      error: (err) => console.error('Error al llamar al servicio:', err),
    });
  }

  irAProductoNuevo(): void {
    this.router.navigate(['/producto/nuevo']);
  }
}