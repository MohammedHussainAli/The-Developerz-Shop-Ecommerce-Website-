import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaisFacemaskComponent } from './product-detais-facemask.component';

describe('ProductDetaisFacemaskComponent', () => {
  let component: ProductDetaisFacemaskComponent;
  let fixture: ComponentFixture<ProductDetaisFacemaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetaisFacemaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetaisFacemaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
