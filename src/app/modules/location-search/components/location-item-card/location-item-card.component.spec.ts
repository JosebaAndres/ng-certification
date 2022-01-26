import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationItemCardComponent } from './location-item-card.component';

describe('LocationItemCardComponent', () => {
  let component: LocationItemCardComponent;
  let fixture: ComponentFixture<LocationItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationItemCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
