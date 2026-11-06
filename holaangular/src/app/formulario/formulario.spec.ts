import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Formulario } from './formulario';

describe('Formulario', () => {
  let fixture: ComponentFixture<Formulario>;
  let comp: Formulario;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulario],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(Formulario);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  const valido = {
    nombre: 'Ana Pérez',
    email: 'ana@correo.com',
    telefono: '987654321',
    edad: 25,
    distrito: 'Cayma',
    entrega: 'domicilio' as const,
    comentarios: '',
    terminos: true,
  };

  it('el formulario vacío es inválido y el botón está deshabilitado', () => {
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.btn-enviar');
    expect(comp.form.invalid).toBeTrue();
    expect(btn.disabled).toBeTrue();
  });

  it('valida min y max de edad', () => {
    comp.form.controls.edad.setValue(10);
    expect(comp.form.controls.edad.errors?.['min']).toBeTruthy();
    comp.form.controls.edad.setValue(120);
    expect(comp.form.controls.edad.errors?.['max']).toBeTruthy();
  });

  it('habilita el botón y agrega la fila a la tabla al enviar', () => {
    comp.form.setValue(valido);
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('.btn-enviar');
    expect(btn.disabled).toBeFalse();
    comp.enviar();
    fixture.detectChanges();
    expect(comp.clientes().length).toBe(1);
    expect(fixture.nativeElement.querySelectorAll('tbody tr').length).toBe(1);
    expect(comp.form.invalid).toBeTrue(); // se limpió
  });
});
