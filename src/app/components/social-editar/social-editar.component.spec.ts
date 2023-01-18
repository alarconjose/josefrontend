import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialEditarComponent } from './social-editar.component';

describe('SocialEditarComponent', () => {
  let component: SocialEditarComponent;
  let fixture: ComponentFixture<SocialEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
