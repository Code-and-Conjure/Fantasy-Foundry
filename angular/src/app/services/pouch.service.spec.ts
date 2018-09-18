import { TestBed } from '@angular/core/testing';

import { PouchService } from './pouch.service';

describe('PouchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PouchService = TestBed.get(PouchService);
    expect(service).toBeTruthy();
  });
});
