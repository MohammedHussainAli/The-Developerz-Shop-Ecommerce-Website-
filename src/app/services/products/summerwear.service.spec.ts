import { TestBed } from '@angular/core/testing';

import { SummerwearService } from './summerwear.service';

describe('SummerwearService', () => {
  let service: SummerwearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SummerwearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
