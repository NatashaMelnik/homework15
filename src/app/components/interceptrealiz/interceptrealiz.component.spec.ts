import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptrealizComponent } from './interceptrealiz.component';

describe('InterceptrealizComponent', () => {
  let component: InterceptrealizComponent;
  let fixture: ComponentFixture<InterceptrealizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterceptrealizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptrealizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
