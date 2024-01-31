import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateempComponent } from './updateemp.component';

describe('UpdateempComponent', () => {
  let component: UpdateempComponent;
  let fixture: ComponentFixture<UpdateempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateempComponent]
    });
    fixture = TestBed.createComponent(UpdateempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
