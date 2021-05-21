import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepaginComponent } from './tablepagin.component';

describe('TablepaginComponent', () => {
  let component: TablepaginComponent;
  let fixture: ComponentFixture<TablepaginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablepaginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablepaginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
