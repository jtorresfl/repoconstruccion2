import { Component, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-servicio',
  imports: [FormsModule],
  templateUrl: './modal-servicio.html',
  styleUrl: './modal-servicio.css',
})
export class ModalServicio {
  servicio = input<any>();

  guardar = output<any>();
  cerrar = output<void>();

  onGuardar(form: NgForm): void {
    console.log('Guardando:', form.value);
    this.guardar.emit({ ...this.servicio(), ...form.value });
    
  }
}