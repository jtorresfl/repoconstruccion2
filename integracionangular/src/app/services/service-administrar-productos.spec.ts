import { TestBed } from '@angular/core/testing';

import { ServiceAdministrarProductos } from './service-administrar-productos';

describe('ServiceAdministrarProductos', () => {
  let service: ServiceAdministrarProductos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdministrarProductos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
