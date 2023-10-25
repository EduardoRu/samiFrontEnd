import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallestemperaturaPage } from './detallestemperatura.page';

describe('DetallestemperaturaPage', () => {
  let component: DetallestemperaturaPage;
  let fixture: ComponentFixture<DetallestemperaturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallestemperaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
