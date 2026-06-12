import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaDetalleComponent } from './tienda-detalle.component';

describe('TiendaDetalleComponent', () => {
  let component: TiendaDetalleComponent;
  let fixture: ComponentFixture<TiendaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
