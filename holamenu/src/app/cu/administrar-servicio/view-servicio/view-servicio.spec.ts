import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewServicio } from './view-servicio';

describe('ViewServicio', () => {
  let component: ViewServicio;
  let fixture: ComponentFixture<ViewServicio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewServicio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewServicio);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
