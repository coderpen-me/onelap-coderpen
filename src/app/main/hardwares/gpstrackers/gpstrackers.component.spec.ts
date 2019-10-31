import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GPStrackersComponent } from './gpstrackers.component';

describe('GPStrackersComponent', () => {
  let component: GPStrackersComponent;
  let fixture: ComponentFixture<GPStrackersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPStrackersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GPStrackersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
