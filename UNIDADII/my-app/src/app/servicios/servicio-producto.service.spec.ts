import { TestBed } from '@angular/core/testing';

import { ServicioProductoService } from './servicio-producto.service';

describe('ServicioProductoService', () => {
  let service: ServicioProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
