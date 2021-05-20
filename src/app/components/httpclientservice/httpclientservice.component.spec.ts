import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpclientserviceComponent } from './httpclientservice.component';

describe('HttpclientserviceComponent', () => {
  let component: HttpclientserviceComponent;
  let fixture: ComponentFixture<HttpclientserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpclientserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpclientserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
