import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationItemErrorComponent } from './location-item-error.component';

describe('LocationItemErrorComponent', () => {
  let component: LocationItemErrorComponent;
  let fixture: ComponentFixture<LocationItemErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationItemErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationItemErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
