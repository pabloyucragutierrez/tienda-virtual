import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Producto {
  id: number;
  name: string;
  category: string;
  catId: string;
  colorId: string;
  price: number;
  oldPrice: number | null;
  stars: number;
  reviews: number;
  badge: string | null;
  img: string;
}

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css',
})
export class TiendaComponent implements OnInit, OnDestroy {
  readonly PRICE_MIN = 0;
  readonly PRICE_MAX = 3000;

  busqueda = '';
  orden = 'precio-asc';
  categoriaActiva = 'todos';
  colorActivo = 'todos';
  precioMin = 0;
  precioMax = 3000;
  paginaActual = 1;
  porPagina = 12; // cantidad de cards por página (fijo)
  colsVista = 6; // columnas del grid (cambia con los botones)

  private dragging: 'min' | 'max' | null = null;
  private trackEl: HTMLElement | null = null;

  categorias = [
    { id: 'todos', name: 'Todos', icon: 'fas fa-border-all', count: 0 },
    { id: 'electronica', name: 'Electrónica', icon: 'fas fa-laptop', count: 0 },
    { id: 'ropa', name: 'Ropa', icon: 'fas fa-tshirt', count: 0 },
    { id: 'hogar', name: 'Hogar', icon: 'fas fa-couch', count: 0 },
    { id: 'deportes', name: 'Deportes', icon: 'fas fa-futbol', count: 0 },
    { id: 'salud', name: 'Salud', icon: 'fas fa-heartbeat', count: 0 },
  ];

  colores = [
    { id: 'negro', name: 'Negro', hex: '#1a1a1a' },
    { id: 'blanco', name: 'Blanco', hex: '#f5f5f5' },
    { id: 'azul', name: 'Azul', hex: '#2563eb' },
    { id: 'rojo', name: 'Rojo', hex: '#dc2626' },
    { id: 'verde', name: 'Verde', hex: '#16a34a' },
    { id: 'amarillo', name: 'Amarillo', hex: '#ca8a04' },
    { id: 'gris', name: 'Gris', hex: '#6b7280' },
    { id: 'rosado', name: 'Rosado', hex: '#db2777' },
  ];

  productos: Producto[] = [
    {
      id: 1,
      name: 'Auriculares Pro Max',
      category: 'Electrónica',
      catId: 'electronica',
      colorId: 'negro',
      price: 299,
      oldPrice: 399,
      stars: 5,
      reviews: 128,
      badge: 'Nuevo',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    },
    {
      id: 2,
      name: 'Smartwatch Serie 5',
      category: 'Electrónica',
      catId: 'electronica',
      colorId: 'negro',
      price: 459,
      oldPrice: 580,
      stars: 5,
      reviews: 203,
      badge: 'Top',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    },
    {
      id: 3,
      name: 'Laptop Ultrabook 14"',
      category: 'Electrónica',
      catId: 'electronica',
      colorId: 'gris',
      price: 2899,
      oldPrice: null,
      stars: 4,
      reviews: 67,
      badge: null,
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80',
    },
    {
      id: 4,
      name: 'Parlante Bluetooth',
      category: 'Electrónica',
      catId: 'electronica',
      colorId: 'azul',
      price: 149,
      oldPrice: 199,
      stars: 4,
      reviews: 89,
      badge: '-25%',
      img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80',
    },
    {
      id: 5,
      name: 'Zapatillas Running X',
      category: 'Deportes',
      catId: 'deportes',
      colorId: 'azul',
      price: 189,
      oldPrice: 240,
      stars: 4,
      reviews: 87,
      badge: '-21%',
      img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    },
    {
      id: 6,
      name: 'Mochila Deportiva',
      category: 'Deportes',
      catId: 'deportes',
      colorId: 'negro',
      price: 99,
      oldPrice: null,
      stars: 4,
      reviews: 44,
      badge: null,
      img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    },
    {
      id: 7,
      name: 'Botella Térmica 750ml',
      category: 'Deportes',
      catId: 'deportes',
      colorId: 'verde',
      price: 59,
      oldPrice: 79,
      stars: 5,
      reviews: 156,
      badge: 'Top',
      img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
    },
    {
      id: 8,
      name: 'Polo Oversize',
      category: 'Ropa',
      catId: 'ropa',
      colorId: 'blanco',
      price: 69,
      oldPrice: null,
      stars: 4,
      reviews: 32,
      badge: null,
      img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80',
    },
    {
      id: 9,
      name: 'Jeans Slim Fit',
      category: 'Ropa',
      catId: 'ropa',
      colorId: 'azul',
      price: 129,
      oldPrice: 160,
      stars: 4,
      reviews: 58,
      badge: '-19%',
      img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80',
    },
    {
      id: 10,
      name: 'Chaqueta Impermeable',
      category: 'Ropa',
      catId: 'ropa',
      colorId: 'negro',
      price: 249,
      oldPrice: 320,
      stars: 5,
      reviews: 74,
      badge: null,
      img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80',
    },
    {
      id: 11,
      name: 'Lámpara Nórdica',
      category: 'Hogar',
      catId: 'hogar',
      colorId: 'amarillo',
      price: 129,
      oldPrice: null,
      stars: 4,
      reviews: 54,
      badge: null,
      img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80',
    },
    {
      id: 12,
      name: 'Set de Cojines Deco',
      category: 'Hogar',
      catId: 'hogar',
      colorId: 'rosado',
      price: 89,
      oldPrice: 110,
      stars: 4,
      reviews: 38,
      badge: null,
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
    },
    {
      id: 13,
      name: 'Difusor de Aromas',
      category: 'Hogar',
      catId: 'hogar',
      colorId: 'blanco',
      price: 79,
      oldPrice: null,
      stars: 5,
      reviews: 91,
      badge: 'Nuevo',
      img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=80',
    },
    {
      id: 14,
      name: 'Vitaminas C 1000mg',
      category: 'Salud',
      catId: 'salud',
      colorId: 'amarillo',
      price: 45,
      oldPrice: 60,
      stars: 5,
      reviews: 210,
      badge: '-25%',
      img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80',
    },
    {
      id: 15,
      name: 'Proteína Whey 1kg',
      category: 'Salud',
      catId: 'salud',
      colorId: 'gris',
      price: 179,
      oldPrice: 220,
      stars: 4,
      reviews: 143,
      badge: null,
      img: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&q=80',
    },
    {
      id: 16,
      name: 'Colchoneta Yoga 6mm',
      category: 'Deportes',
      catId: 'deportes',
      colorId: 'verde',
      price: 89,
      oldPrice: null,
      stars: 4,
      reviews: 67,
      badge: null,
      img: 'https://images.unsplash.com/photo-1601925228239-c2e6f74bd6c8?w=400&q=80',
    },
  ];

  productosFiltrados: Producto[] = [];

  get minPercent(): number {
    return (
      ((this.precioMin - this.PRICE_MIN) / (this.PRICE_MAX - this.PRICE_MIN)) *
      100
    );
  }

  get maxPercent(): number {
    return (
      ((this.precioMax - this.PRICE_MIN) / (this.PRICE_MAX - this.PRICE_MIN)) *
      100
    );
  }

  toggleFav(event: Event, id: number): void {
  event.stopPropagation();
  // Aquí tu lógica de favoritos
  console.log('Favorito toggled:', id);
}

addToCart(event: Event, id: number): void {
  event.stopPropagation();
  // Aquí tu lógica de carrito
  console.log('Producto añadido al carrito:', id);
}

  get productosPaginados(): Producto[] {
    const start = (this.paginaActual - 1) * this.porPagina;
    return this.productosFiltrados.slice(start, start + this.porPagina);
  }

  get totalPages(): number {
    return Math.ceil(this.productosFiltrados.length / this.porPagina);
  }

  ngOnInit(): void {
    this.calcCounts();
    this.applyFilters();
  }

  ngOnDestroy(): void {
    this.stopDrag();
  }

  calcCounts(): void {
    this.categorias[0].count = this.productos.length;
    this.categorias.slice(1).forEach((cat) => {
      cat.count = this.productos.filter((p) => p.catId === cat.id).length;
    });
  }

  setCat(id: string): void {
    this.categoriaActiva = id;
    this.paginaActual = 1;
    this.applyFilters();
  }

  setColor(id: string): void {
    this.colorActivo = this.colorActivo === id ? 'todos' : id;
    this.paginaActual = 1;
    this.applyFilters();
  }

  resetPrices(): void {
    this.precioMin = this.PRICE_MIN;
    this.precioMax = this.PRICE_MAX;
    this.applyFilters();
  }

  clearFilters(): void {
    this.categoriaActiva = 'todos';
    this.colorActivo = 'todos';
    this.precioMin = this.PRICE_MIN;
    this.precioMax = this.PRICE_MAX;
    this.busqueda = '';
    this.orden = 'precio-asc';
    this.paginaActual = 1;
    this.applyFilters();
  }

  setView(cols: number): void {
    this.colsVista = cols;
    this.paginaActual = 1;
    // ya NO tocamos porPagina
  }

  applyFilters(): void {
    let result = [...this.productos];

    if (this.categoriaActiva !== 'todos') {
      result = result.filter((p) => p.catId === this.categoriaActiva);
    }
    if (this.colorActivo !== 'todos') {
      result = result.filter((p) => p.colorId === this.colorActivo);
    }
    if (this.busqueda.trim()) {
      const q = this.busqueda.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }
    result = result.filter(
      (p) => p.price >= this.precioMin && p.price <= this.precioMax,
    );

    switch (this.orden) {
      case 'precio-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'precio-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'nombre':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    this.productosFiltrados = result;
    this.paginaActual = 1;
  }

  hasActiveFilters(): boolean {
    return (
      this.categoriaActiva !== 'todos' ||
      this.colorActivo !== 'todos' ||
      this.precioMin > this.PRICE_MIN ||
      this.precioMax < this.PRICE_MAX
    );
  }

  getCatName(id: string): string {
    return this.categorias.find((c) => c.id === id)?.name ?? id;
  }

  getColorName(id: string): string {
    return this.colores.find((c) => c.id === id)?.name ?? id;
  }

  getArr(n: number): number[] {
    return Array(Math.max(0, n)).fill(0);
  }

  getPagesArr(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goPage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.paginaActual = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  startDrag(event: MouseEvent, thumb: 'min' | 'max'): void {
    event.preventDefault();
    this.dragging = thumb;
    this.trackEl = (event.target as HTMLElement).closest(
      '.range-track',
    ) as HTMLElement;
  }

  onTrackClick(event: MouseEvent, track: HTMLElement): void {
    if ((event.target as HTMLElement).classList.contains('range-thumb')) return;
    this.trackEl = track;
    this.updateFromMouse(event, track);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.dragging || !this.trackEl) return;
    this.updateFromMouse(event, this.trackEl);
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.stopDrag();
  }

  private updateFromMouse(event: MouseEvent, track: HTMLElement): void {
    const rect = track.getBoundingClientRect();
    let ratio = (event.clientX - rect.left) / rect.width;
    ratio = Math.min(1, Math.max(0, ratio));
    const value = Math.round(
      this.PRICE_MIN + ratio * (this.PRICE_MAX - this.PRICE_MIN),
    );

    if (this.dragging === 'min') {
      this.precioMin = Math.min(value, this.precioMax - 50);
    } else {
      this.precioMax = Math.max(value, this.precioMin + 50);
    }

    if (!this.dragging) {
      const midValue = (this.precioMin + this.precioMax) / 2;
      if (value < midValue) {
        this.dragging = 'min';
        this.precioMin = Math.min(value, this.precioMax - 50);
      } else {
        this.dragging = 'max';
        this.precioMax = Math.max(value, this.precioMin + 50);
      }
    }

    this.applyFilters();
  }

  private stopDrag(): void {
    this.dragging = null;
    this.trackEl = null;
  }
}
