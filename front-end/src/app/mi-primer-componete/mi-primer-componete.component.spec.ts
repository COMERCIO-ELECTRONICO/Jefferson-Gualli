import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiPrimerComponeteComponent } from './mi-primer-componete.component';

describe('MiPrimerComponeteComponent', () => {
  let component: MiPrimerComponeteComponent;
  let fixture: ComponentFixture<MiPrimerComponeteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MiPrimerComponeteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiPrimerComponeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
