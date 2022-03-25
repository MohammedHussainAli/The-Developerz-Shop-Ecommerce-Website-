import { TestBed } from '@angular/core/testing';

import { WallartsService } from './wallarts.service';

describe('WallartsService', () => {
  let service: WallartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WallartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
