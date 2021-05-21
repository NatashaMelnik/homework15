import { TestBed } from '@angular/core/testing';

import { ClickservService } from './clickserv.service';

describe('HttpserviceService', () => {
  let service: ClickservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
