import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialAgregarComponent } from './social-agregar.component';

describe('SocialAgregarComponent', () => {
  let component: SocialAgregarComponent;
  let fixture: ComponentFixture<SocialAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
