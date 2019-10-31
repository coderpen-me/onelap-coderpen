import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalcorporationComponent } from './municipalcorporation.component';

describe('MunicipalcorporationComponent', () => {
  let component: MunicipalcorporationComponent;
  let fixture: ComponentFixture<MunicipalcorporationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalcorporationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalcorporationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
