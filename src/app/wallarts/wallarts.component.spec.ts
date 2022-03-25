import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallartsComponent } from './wallarts.component';

describe('WallartsComponent', () => {
  let component: WallartsComponent;
  let fixture: ComponentFixture<WallartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
