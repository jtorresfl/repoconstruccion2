import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productos } from './productos';

describe('Productos', () => {
  let component: Productos;
  let fixture: ComponentFixture<Productos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productos]
    }).compileComponents();

    fixture = TestBed.createComponent(Productos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one row per product', () => {
    const filas = (fixture.nativeElement as HTMLElement).querySelectorAll('tbody tr');
    expect(filas.length).toBe(component.productos.length);
  });
});
