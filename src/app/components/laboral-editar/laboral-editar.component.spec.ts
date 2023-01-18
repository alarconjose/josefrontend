import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboralEditarComponent } from './laboral-editar.component';

describe('LaboralEditarComponent', () => {
  let component: LaboralEditarComponent;
  let fixture: ComponentFixture<LaboralEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboralEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboralEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
