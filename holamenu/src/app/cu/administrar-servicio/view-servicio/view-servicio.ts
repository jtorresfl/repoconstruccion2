import { Component } from '@angular/core';
import { ModalServicio } from '../modal-servicio/modal-servicio';

@Component({
  selector: 'app-view-servicio',
  imports: [ModalServicio],
  templateUrl: './view-servicio.html',
  styleUrl: './view-servicio.css',
})
export class ViewServicio {

  servicios: any[] = [
    { id: 1, nombre: 'Soporte técnico', descripcion: 'Asistencia remota y presencial', precio: 50, activo: true },
    { id: 2, nombre: 'Instalación', descripcion: 'Instalación de equipos y software', precio: 80, activo: true },
    { id: 3, nombre: 'Mantenimiento', descripcion: 'Mantenimiento preventivo mensual', precio: 120, activo: false },
    { id: 4, nombre: 'Consultoría', descripcion: 'Asesoría personalizada por hora', precio: 150, activo: true }
  ];

  mostrarModal = false;
  servicioSeleccionado: any = null;

  editarServicio(servicio: any) {
    this.servicioSeleccionado = { ...servicio };
    this.mostrarModal = true;
  }

  guardarServicio(servicio: any) {
    this.servicios = this.servicios.map(s =>
      s.id === servicio.id ? servicio : s
    );
    console.log('Servicio guardado:', servicio);
    this.cerrarModal();
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.servicioSeleccionado = null;
  }
}