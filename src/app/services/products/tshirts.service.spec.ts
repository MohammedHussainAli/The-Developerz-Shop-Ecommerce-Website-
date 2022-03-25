import { TestBed } from '@angular/core/testing';

import { TshirtsService } from './tshirts.service';

describe('TshirtsService', () => {
  let service: TshirtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TshirtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
