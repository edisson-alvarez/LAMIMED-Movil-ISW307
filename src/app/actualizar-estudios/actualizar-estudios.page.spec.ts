import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarEstudiosPage } from './actualizar-estudios.page';

describe('ActualizarEstudiosPage', () => {
  let component: ActualizarEstudiosPage;
  let fixture: ComponentFixture<ActualizarEstudiosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarEstudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
