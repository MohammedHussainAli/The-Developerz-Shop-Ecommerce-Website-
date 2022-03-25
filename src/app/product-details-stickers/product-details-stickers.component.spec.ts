import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsStickersComponent } from './product-details-stickers.component';

describe('ProductDetailsStickersComponent', () => {
  let component: ProductDetailsStickersComponent;
  let fixture: ComponentFixture<ProductDetailsStickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsStickersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsStickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
