import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationItemLoadingComponent } from './location-item-loading.component';

describe('LocationItemLoadingComponent', () => {
  let component: LocationItemLoadingComponent;
  let fixture: ComponentFixture<LocationItemLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationItemLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationItemLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
