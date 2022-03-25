import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsHoodieComponent } from './product-details-hoodie.component';

describe('ProductDetailsHoodieComponent', () => {
  let component: ProductDetailsHoodieComponent;
  let fixture: ComponentFixture<ProductDetailsHoodieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsHoodieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsHoodieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
