import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsBabyclothingComponent } from './product-details-babyclothing.component';

describe('ProductDetailsBabyclothingComponent', () => {
  let component: ProductDetailsBabyclothingComponent;
  let fixture: ComponentFixture<ProductDetailsBabyclothingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsBabyclothingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsBabyclothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
