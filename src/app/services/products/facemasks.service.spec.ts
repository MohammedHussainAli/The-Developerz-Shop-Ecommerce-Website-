import { TestBed } from '@angular/core/testing';

import { FacemasksService } from './facemasks.service';

describe('FacemasksService', () => {
  let service: FacemasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacemasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
