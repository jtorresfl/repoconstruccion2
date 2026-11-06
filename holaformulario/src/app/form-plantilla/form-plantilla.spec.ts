import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPlantilla } from './form-plantilla';

describe('FormPlantilla', () => {
  let fixture: ComponentFixture<FormPlantilla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPlantilla],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();
    fixture = TestBed.createComponent(FormPlantilla);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('el botón inicia deshabilitado', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const btn: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(btn.disabled).toBeTrue();
  });
});
