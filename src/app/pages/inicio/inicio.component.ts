import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit, OnDestroy {

  currentSlide = 0;
  progressWidth = 0;
  private timer: any;
  private progressTimer: any;
  readonly interval = 5000;

  slides = [
    { img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&q=80', bg: '#0a1628', title: 'Lorem ipsum ', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', cta: 'Ver ofertas', align: 'left' },
    { img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=80', bg: '#1a0a2e', title: 'Lorem ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', cta: 'Comprar ahora', align: 'right' },
    { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80', bg: '#0a2010', title: 'Lorem ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', cta: 'Explorar', align: 'left' },
    { img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1400&q=80', bg: '#1a0a0a', title: 'Lorem ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', cta: 'Ver productos', align: 'right' },
  ];

  quickCats = [
    { name: 'Electrónica',  icon: 'fas fa-laptop' },
    { name: 'Ropa',         icon: 'fas fa-tshirt' },
    { name: 'Hogar',        icon: 'fas fa-couch' },
    { name: 'Deportes',     icon: 'fas fa-futbol' },
    { name: 'Juguetes',     icon: 'fas fa-gamepad' },
    { name: 'Alimentos',    icon: 'fas fa-shopping-basket' },
    { name: 'Salud',        icon: 'fas fa-heartbeat' },
    { name: 'Mascotas',     icon: 'fas fa-paw' },
  ];

  aboutPoints = [
    'Productos 100% originales y garantizados',
    'Envíos rápidos a todo el país',
    'Atención personalizada 24/7',
    'Devoluciones sin complicaciones',
  ];

  featuredProducts = [
    { name: 'Auriculares Pro Max', category: 'Electrónica', price: '299', oldPrice: '399', stars: 5, reviews: 128, badge: 'Nuevo', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' },
    { name: 'Zapatillas Running X', category: 'Deportes',    price: '189', oldPrice: '240', stars: 4, reviews: 87,  badge: '-21%', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80' },
    { name: 'Lámpara Nórdica',     category: 'Hogar',       price: '129', oldPrice: null,  stars: 4, reviews: 54,  badge: null,   img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80' },
    { name: 'Smartwatch Serie 5',  category: 'Electrónica', price: '459', oldPrice: '580', stars: 5, reviews: 203, badge: 'Top',  img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
  ];

  blogPosts = [
    { title: 'Lorem ipsum ', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', date: '2 jun 2025', tag: 'Tecnología', img: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&q=80' },
    { title: 'Lorem ipsum ', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', date: '28 may 2025', tag: 'Hogar', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { title: 'Lorem ipsum ', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', date: '20 may 2025', tag: 'Salud', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80' },
  ];

  contactInfo = [
    { icon: 'fas fa-map-marker-alt', label: 'Dirección',  value: 'Av. Principal 123, Lima, Perú' },
    { icon: 'fas fa-phone-alt',      label: 'Teléfono',   value: '+51 999 888 777' },
    { icon: 'fas fa-envelope',       label: 'Email',      value: 'hola@kintiny.pe' },
    { icon: 'fas fa-clock',          label: 'Horario',    value: 'Lun - Sáb: 9am a 7pm' },
  ];

  ngOnInit(): void { this.startAuto(); }
  ngOnDestroy(): void { this.stopAuto(); }

  startAuto(): void {
    this.progressWidth = 0;
    const stepTime = this.interval / 100;
    this.progressTimer = setInterval(() => { this.progressWidth += 1; }, stepTime);
    this.timer = setInterval(() => { this.next(); }, this.interval);
  }

  stopAuto(): void {
    clearInterval(this.timer);
    clearInterval(this.progressTimer);
  }

  resetAuto(): void { this.stopAuto(); this.startAuto(); }

  next(): void { this.currentSlide = (this.currentSlide + 1) % this.slides.length; this.resetAuto(); }
  prev(): void { this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length; this.resetAuto(); }
  goTo(index: number): void { this.currentSlide = index; this.resetAuto(); }
}