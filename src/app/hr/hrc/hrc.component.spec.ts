import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrcComponent } from './hrc.component';

describe('HrcComponent', () => {
  let component: HrcComponent;
  let fixture: ComponentFixture<HrcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
