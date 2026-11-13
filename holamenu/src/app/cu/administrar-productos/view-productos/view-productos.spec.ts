import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductos } from './view-productos';

describe('ViewProductos', () => {
  let component: ViewProductos;
  let fixture: ComponentFixture<ViewProductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
