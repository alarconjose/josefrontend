import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadEditarComponent } from './habilidad-editar.component';

describe('HabilidadEditarComponent', () => {
  let component: HabilidadEditarComponent;
  let fixture: ComponentFixture<HabilidadEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
