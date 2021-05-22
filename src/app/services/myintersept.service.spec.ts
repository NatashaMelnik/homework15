import { TestBed } from '@angular/core/testing';

import { Myintersept } from './myintersept.service';

describe('MyinterseptService', () => {
  let service: Myintersept;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Myintersept);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
