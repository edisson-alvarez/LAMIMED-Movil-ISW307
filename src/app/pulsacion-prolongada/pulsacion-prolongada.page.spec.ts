import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PulsacionProlongadaPage } from './pulsacion-prolongada.page';

describe('PulsacionProlongadaPage', () => {
  let component: PulsacionProlongadaPage;
  let fixture: ComponentFixture<PulsacionProlongadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PulsacionProlongadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
