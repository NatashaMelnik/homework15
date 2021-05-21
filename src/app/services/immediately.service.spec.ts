import { TestBed } from '@angular/core/testing';

import { ImmediatelyService } from './immediately.service';

describe('HttpserviceService', () => {
  let service: ImmediatelyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmediatelyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
