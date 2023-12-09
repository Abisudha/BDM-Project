import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRegisterComponent } from './bus-register.component';

describe('BusRegisterComponent', () => {
  let component: BusRegisterComponent;
  let fixture: ComponentFixture<BusRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusRegisterComponent]
    });
    fixture = TestBed.createComponent(BusRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
