import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacemasksComponent } from './facemasks.component';

describe('FacemasksComponent', () => {
  let component: FacemasksComponent;
  let fixture: ComponentFixture<FacemasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacemasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacemasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
