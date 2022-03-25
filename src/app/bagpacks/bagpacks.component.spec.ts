import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagpacksComponent } from './bagpacks.component';

describe('BagpacksComponent', () => {
  let component: BagpacksComponent;
  let fixture: ComponentFixture<BagpacksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BagpacksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BagpacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
