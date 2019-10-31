import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientstoriesComponent } from './clientstories.component';

describe('ClientstoriesComponent', () => {
  let component: ClientstoriesComponent;
  let fixture: ComponentFixture<ClientstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
