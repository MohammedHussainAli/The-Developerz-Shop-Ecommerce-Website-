import { TestBed } from '@angular/core/testing';

import { BagpackService } from './bagpack.service';

describe('BagpackService', () => {
  let service: BagpackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BagpackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
