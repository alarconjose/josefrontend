import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEditarComponent } from './banner-editar.component';

describe('BannerEditarComponent', () => {
  let component: BannerEditarComponent;
  let fixture: ComponentFixture<BannerEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerEditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
