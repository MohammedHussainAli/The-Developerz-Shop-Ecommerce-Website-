import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerwearComponent } from './summerwear.component';

describe('SummerwearComponent', () => {
  let component: SummerwearComponent;
  let fixture: ComponentFixture<SummerwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
