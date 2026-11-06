import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

export interface Cliente {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  edad: number;
  distrito: string;
  entrega: 'domicilio' | 'recojo';
  comentarios: string;
}

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  distritos = ['Cercado de Arequipa', 'Cayma', 'Yanahuara', 'Cerro Colorado', 'Paucarpata', 'Sachaca'];

  // Tabla 
  clientes = signal<Cliente[]>([]);
  private siguienteId = 1;

  // 8 campos: texto, email, teléfono, número, select, radio, textarea y checkbox
  form = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^9\d{8}$/)]),
    edad: new FormControl<number | null>(null, [Validators.required, Validators.min(18), Validators.max(99)]),
    distrito: new FormControl('', Validators.required),
    entrega: new FormControl<'domicilio' | 'recojo' | null>(null, Validators.required),
    comentarios: new FormControl('', Validators.maxLength(100)),
    terminos: new FormControl(false, Validators.requiredTrue),
  });

  /** Devuelve el mensaje de error del campo (o null si no hay que mostrarlo). */
  error(campo: keyof Formulario['form']['controls']): string | null {
    const c = this.form.controls[campo];
    if (!c.invalid || !(c.touched || c.dirty)) return null;
    const e = c.errors!;
    if (e['required'] || e['requiredTrue']) return 'Este campo es obligatorio';
    if (e['minlength']) return `Mínimo ${e['minlength'].requiredLength} caracteres`;
    if (e['maxlength']) return `Máximo ${e['maxlength'].requiredLength} caracteres`;
    if (e['email']) return 'Ingresa un correo válido';
    if (e['pattern']) return 'Debe tener 9 dígitos y empezar con 9';
    if (e['min']) return `La edad mínima es ${e['min'].min}`;
    if (e['max']) return `La edad máxima es ${e['max'].max}`;
    return 'Valor no válido';
  }

  enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const cliente: Cliente = {
      id: this.siguienteId++,
      nombre: v.nombre!.trim(),
      email: v.email!,
      telefono: v.telefono!,
      edad: v.edad!,
      distrito: v.distrito!,
      entrega: v.entrega!,
      comentarios: v.comentarios?.trim() || '—',
    };
    this.clientes.update((lista) => [...lista, cliente]);
    this.form.reset({ distrito: '', terminos: false });
  }

  eliminar(id: number) {
    this.clientes.update((lista) => lista.filter((c) => c.id !== id));
  }
}
