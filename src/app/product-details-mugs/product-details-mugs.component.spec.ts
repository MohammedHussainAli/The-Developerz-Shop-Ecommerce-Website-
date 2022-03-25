import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsMugsComponent } from './product-details-mugs.component';

describe('ProductDetailsMugsComponent', () => {
  let component: ProductDetailsMugsComponent;
  let fixture: ComponentFixture<ProductDetailsMugsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsMugsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsMugsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
