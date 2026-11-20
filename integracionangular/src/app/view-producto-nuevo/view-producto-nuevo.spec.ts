import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductoNuevo } from './view-producto-nuevo';

describe('ViewProductoNuevo', () => {
  let component: ViewProductoNuevo;
  let fixture: ComponentFixture<ViewProductoNuevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProductoNuevo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductoNuevo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
