import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZoomEstudiosPage } from './zoom-estudios.page';

describe('ZoomEstudiosPage', () => {
  let component: ZoomEstudiosPage;
  let fixture: ComponentFixture<ZoomEstudiosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoomEstudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
