import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Estudiante {
  nombre: string;
  apellido: string;
  dni: string;
  numero: string;
  email: string;
  sexo: string;
  edad: number;
  universidad: string;
  juego: string;
}

@Component({
  selector: 'app-form-plantilla',
  imports: [FormsModule],
  templateUrl: './form-plantilla.html',
  styleUrl: './form-plantilla.css',
})
export class FormPlantilla {
  universidades = ['ULASALLE', 'UNSA', 'UCSM', 'UTP', 'UCSP'];
  estudiantes = signal<Estudiante[]>([]);

  onSubmit(form: NgForm) {
    this.estudiantes.update((lista) => [...lista, form.value as Estudiante]);
    form.resetForm();
  }
}
