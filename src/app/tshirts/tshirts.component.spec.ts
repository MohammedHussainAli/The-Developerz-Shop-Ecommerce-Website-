import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TshirtsComponent } from './tshirts.component';

describe('TshirtsComponent', () => {
  let component: TshirtsComponent;
  let fixture: ComponentFixture<TshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TshirtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
