import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsBagpacksComponent } from './product-details-bagpacks.component';

describe('ProductDetailsBagpacksComponent', () => {
  let component: ProductDetailsBagpacksComponent;
  let fixture: ComponentFixture<ProductDetailsBagpacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsBagpacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsBagpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
