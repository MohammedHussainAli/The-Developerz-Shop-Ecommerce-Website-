import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPageSweatshirtComponent } from './product-details-page-sweatshirt.component';

describe('ProductDetailsPageSweatshirtComponent', () => {
  let component: ProductDetailsPageSweatshirtComponent;
  let fixture: ComponentFixture<ProductDetailsPageSweatshirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsPageSweatshirtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPageSweatshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
