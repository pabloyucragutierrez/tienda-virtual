import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tienda-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tienda-detalle.component.html',
  styleUrl: './tienda-detalle.component.css'
})
export class TiendaDetalleComponent {

  activeImg = 0;
  isFav = false;
  cantidad = 1;
  colorSeleccionado = 'Negro';
  tabActivo = 'Descripción';
  added = false;

  tabs = ['Descripción', 'Especificaciones', 'Reseñas'];

  imagenes = [
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=700&q=80',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=700&q=80',
    'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=700&q=80',
  ];

  producto = {
    name:        'Auriculares Pro Max',
    category:    'Electrónica',
    price:       299,
    oldPrice:    399,
    stars:       5,
    reviews:     128,
    badge:       'Nuevo',
    description: 'Experimenta el sonido como nunca antes con los Auriculares Pro Max. Diseñados para los amantes de la música, ofrecen cancelación de ruido activa, drivers de 40mm y hasta 30 horas de batería. Su diseño ergonómico los hace perfectos para uso prolongado.',
    specs: [
      { label: 'Driver',         value: '40mm dinámico' },
      { label: 'Respuesta',      value: '20Hz – 20kHz' },
      { label: 'Batería',        value: '30 horas' },
      { label: 'Conectividad',   value: 'Bluetooth 5.2' },
      { label: 'Cancelación',    value: 'ANC activa' },
      { label: 'Peso',           value: '250g' },
      { label: 'Resistencia',    value: 'IPX4' },
      { label: 'Garantía',       value: '1 año' },
    ]
  };

  colores = [
    { name: 'Negro',   hex: '#1a1a1a' },
    { name: 'Blanco',  hex: '#f0f0f0' },
    { name: 'Azul',    hex: '#2563eb' },
    { name: 'Rosado',  hex: '#db2777' },
  ];

  perks = [
    { icon: 'fas fa-truck',          label: 'Envío gratis desde S/ 150' },
    { icon: 'fas fa-undo',           label: 'Devolución en 30 días' },
    { icon: 'fas fa-shield-alt',     label: 'Garantía 1 año' },
    // { icon: 'fas fa-credit-card',    label: 'Hasta 12 cuotas sin interés' },
  ];

  ratingBars = [
    { stars: 5, pct: 72 },
    { stars: 4, pct: 18 },
    { stars: 3, pct: 6  },
    { stars: 2, pct: 3  },
    { stars: 1, pct: 1  },
  ];

  resenas = [
    {
      name:    'Carlos M.',
      stars:   5,
      date:    '2 jun 2025',
      comment: 'Excelente calidad de sonido. La cancelación de ruido es impresionante, perfecta para trabajar en casa con niños. La batería dura exactamente lo que dicen.',
      avatar:  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80'
    },
    {
      name:    'Lucía R.',
      stars:   5,
      date:    '18 may 2025',
      comment: 'Los mejores auriculares que he tenido. Muy cómodos, puedo usarlos horas sin molestias. El sonido es increíble y el diseño es elegante.',
      avatar:  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80'
    },
    {
      name:    'Miguel T.',
      stars:   4,
      date:    '5 may 2025',
      comment: 'Muy buenos auriculares. El sonido es claro y los graves son potentes. Le quito una estrella porque el estuche podría ser mejor.',
      avatar:  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80'
    },
  ];

  relacionados = [
    { name: 'Smartwatch Serie 5',  category: 'Electrónica', price: 459, oldPrice: 580, badge: 'Top',  img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
    { name: 'Parlante Bluetooth',  category: 'Electrónica', price: 149, oldPrice: 199, badge: '-25%', img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80' },
    { name: 'Laptop Ultrabook 14"',category: 'Electrónica', price: 2899,oldPrice: null,badge: null,   img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80' },
    { name: 'Botella Térmica',     category: 'Deportes',    price: 59,  oldPrice: 79,  badge: 'Top',  img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80' },
  ];

  getArr(n: number): number[] {
    return Array(Math.max(0, n)).fill(0);
  }

  getDiscount(): number {
    if (!this.producto.oldPrice) return 0;
    return Math.round((1 - this.producto.price / this.producto.oldPrice) * 100);
  }

  increaseQty(): void {
    this.cantidad++;
  }

  decreaseQty(): void {
    if (this.cantidad > 1) this.cantidad--;
  }

  addToCart(): void {
    this.added = true;
    setTimeout(() => this.added = false, 2500);
  }
}