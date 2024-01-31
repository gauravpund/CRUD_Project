import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayempComponent } from './displayemp.component';

describe('DisplayempComponent', () => {
  let component: DisplayempComponent;
  let fixture: ComponentFixture<DisplayempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayempComponent]
    });
    fixture = TestBed.createComponent(DisplayempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
