import { Component, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-producto',
  imports: [FormsModule],
  templateUrl: './modal-producto.html',
  styleUrl: './modal-producto.css',
})
export class ModalProducto {
  producto = input<any>();

  guardar = output<any>();
  cerrar = output<void>();

  onGuardar(form: NgForm): void {
    console.log('Guardando:', form.value);
    this.guardar.emit({ ...this.producto(), ...form.value });
  }
}