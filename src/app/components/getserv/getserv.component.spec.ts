import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetservComponent } from './getserv.component';

describe('GetservComponent', () => {
  let component: GetservComponent;
  let fixture: ComponentFixture<GetservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
