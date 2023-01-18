import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadAgregarComponent } from './habilidad-agregar.component';

describe('HabilidadAgregarComponent', () => {
  let component: HabilidadAgregarComponent;
  let fixture: ComponentFixture<HabilidadAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
