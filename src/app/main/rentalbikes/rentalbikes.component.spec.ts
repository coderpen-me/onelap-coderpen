import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalbikesComponent } from './rentalbikes.component';

describe('RentalbikesComponent', () => {
  let component: RentalbikesComponent;
  let fixture: ComponentFixture<RentalbikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalbikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalbikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
