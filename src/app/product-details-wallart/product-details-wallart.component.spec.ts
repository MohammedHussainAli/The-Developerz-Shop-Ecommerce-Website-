import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsWallartComponent } from './product-details-wallart.component';

describe('ProductDetailsWallartComponent', () => {
  let component: ProductDetailsWallartComponent;
  let fixture: ComponentFixture<ProductDetailsWallartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsWallartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsWallartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
