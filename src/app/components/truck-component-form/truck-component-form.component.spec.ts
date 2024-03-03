import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckComponentFormComponent } from './truck-component-form.component';

describe('TruckComponentFormComponent', () => {
  let component: TruckComponentFormComponent;
  let fixture: ComponentFixture<TruckComponentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TruckComponentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckComponentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
