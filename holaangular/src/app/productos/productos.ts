import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


interface Producto {
  id: number;
  nombre: string;
  marca: string;
  descripcion: string;
  precio: number;
  stock: number;
}

@Component({
  selector: 'app-productos',
  imports: [CurrencyPipe],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  productos: Producto[] = [
    { id: 1, nombre: 'Leche entera', marca: 'Gloria', descripcion: 'Caja de 1 litro', precio: 5.2, stock: 120 },
    { id: 2, nombre: 'Arroz extra', marca: 'Costeño', descripcion: 'Bolsa de 5 kg', precio: 24.9, stock: 80 },
    { id: 3, nombre: 'Aceite vegetal', marca: 'Primor', descripcion: 'Botella de 1 litro', precio: 10.5, stock: 45 },
    { id: 4, nombre: 'Atún en aceite', marca: 'Florida', descripcion: 'Lata de 170 g', precio: 6.8, stock: 0 },
    { id: 5, nombre: 'Fideos spaghetti', marca: 'Don Vittorio', descripcion: 'Paquete de 500 g', precio: 3.9, stock: 150 },
    { id: 6, nombre: 'Yogurt de fresa', marca: 'Laive', descripcion: 'Botella de 1 litro', precio: 8.5, stock: 30 },
  ];
}