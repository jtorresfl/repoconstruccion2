import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServicio } from './modal-servicio';

describe('ModalServicio', () => {
  let component: ModalServicio;
  let fixture: ComponentFixture<ModalServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
