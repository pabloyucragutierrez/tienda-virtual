import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CartItem {
  id: number;
  name: string;
  category: string;
  color: string;
  price: number;
  qty: number;
  img: string;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  envioGratisDesde = 150;
  cupon = '';
  cuponMsg = '';
  cuponError = false;
  descuento = 0;

  items: CartItem[] = [
    { id: 1, name: 'Auriculares Pro Max',  category: 'Electrónica', color: 'Negro', price: 299, qty: 1, img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80' },
    { id: 2, name: 'Smartwatch Serie 5',   category: 'Electrónica', color: 'Negro', price: 459, qty: 1, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80' },
    { id: 3, name: 'Zapatillas Running X', category: 'Deportes',    color: 'Azul',  price: 189, qty: 2, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80' },
  ];

  get subtotal(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  get envio(): number {
    return this.subtotal >= this.envioGratisDesde || this.subtotal === 0 ? 0 : 15;
  }

  get total(): number {
    return this.subtotal + this.envio - this.descuento;
  }

  increaseQty(item: CartItem): void {
    item.qty++;
  }

  decreaseQty(item: CartItem): void {
    if (item.qty > 1) item.qty--;
  }

  removeItem(item: CartItem): void {
    this.items = this.items.filter(i => i.id !== item.id);
  }

  applyCoupon(): void {
    if (!this.cupon.trim()) {
      this.cuponMsg = 'Ingresa un código.';
      this.cuponError = true;
      return;
    }
    if (this.cupon.trim().toUpperCase() === 'DESCUENTO10') {
      this.descuento = this.subtotal * 0.1;
      this.cuponMsg = 'Cupón aplicado: 10% de descuento.';
      this.cuponError = false;
    } else {
      this.descuento = 0;
      this.cuponMsg = 'Código no válido.';
      this.cuponError = true;
    }
  }
}