import { TestBed } from '@angular/core/testing';

import { BabyclothingService } from './babyclothing.service';

describe('BabyclothingService', () => {
  let service: BabyclothingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BabyclothingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
