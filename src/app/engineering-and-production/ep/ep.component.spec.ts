import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpComponent } from './ep.component';

describe('EpComponent', () => {
  let component: EpComponent;
  let fixture: ComponentFixture<EpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
