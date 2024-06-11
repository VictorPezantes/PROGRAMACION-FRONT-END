import { TestBed } from '@angular/core/testing';

import { ServicioPorductosService } from './servicio-porductos.service';

describe('ServicioPorductosService', () => {
  let service: ServicioPorductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPorductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
