import { TestBed } from '@angular/core/testing';

import { LocalstoragenService } from './localstoragen.service';

describe('LocalstoragenService', () => {
  let service: LocalstoragenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstoragenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
