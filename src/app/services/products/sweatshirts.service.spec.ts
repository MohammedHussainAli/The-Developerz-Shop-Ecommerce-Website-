import { TestBed } from '@angular/core/testing';

import { SweatshirtsService } from './sweatshirts.service';

describe('SweatshirtsService', () => {
  let service: SweatshirtsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweatshirtsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
