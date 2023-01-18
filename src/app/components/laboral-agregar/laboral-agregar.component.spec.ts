import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralAgregarComponent } from './laboral-agregar.component';

describe('LaboralAgregarComponent', () => {
  let component: LaboralAgregarComponent;
  let fixture: ComponentFixture<LaboralAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboralAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboralAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
