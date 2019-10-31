import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyEquipmentsComponent } from './heavy-equipments.component';

describe('HeavyEquipmentsComponent', () => {
  let component: HeavyEquipmentsComponent;
  let fixture: ComponentFixture<HeavyEquipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavyEquipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavyEquipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
