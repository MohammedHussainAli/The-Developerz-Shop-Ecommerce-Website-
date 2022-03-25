import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyclothingComponent } from './babyclothing.component';

describe('BabyclothingComponent', () => {
  let component: BabyclothingComponent;
  let fixture: ComponentFixture<BabyclothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyclothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BabyclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
