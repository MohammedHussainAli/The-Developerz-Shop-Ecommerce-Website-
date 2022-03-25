import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPagSummerweareComponent } from './product-details-pag-summerweare.component';

describe('ProductDetailsPagSummerweareComponent', () => {
  let component: ProductDetailsPagSummerweareComponent;
  let fixture: ComponentFixture<ProductDetailsPagSummerweareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsPagSummerweareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsPagSummerweareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
