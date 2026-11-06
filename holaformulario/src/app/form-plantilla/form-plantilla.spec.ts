import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlantilla } from './form-plantilla';

describe('FormPlantilla', () => {
  let component: FormPlantilla;
  let fixture: ComponentFixture<FormPlantilla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPlantilla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPlantilla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
