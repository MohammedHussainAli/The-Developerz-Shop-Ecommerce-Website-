import { TestBed } from '@angular/core/testing';

import { MugsService } from './mugs.service';

describe('MugsService', () => {
  let service: MugsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MugsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
