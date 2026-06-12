import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;
  userMenuOpen = false;
  searchFocused = false;
  searchQuery = '';
  activeLink = 'inicio';

  // Login modal
  loginModalOpen = false;
  loginEmail = '';
  loginPassword = '';
  showPassword = false;

  // Cart sidenav
  cartOpen = false;
  cartItems: { name: string; price: number; qty: number; icon: string }[] = [
    { name: 'Zapatillas Nike Air', price: 250.00, qty: 1, icon: 'fas fa-shoe-prints' },
    { name: 'Polo Básico Blanco',  price: 45.00,  qty: 2, icon: 'fas fa-tshirt' },
    { name: 'Mochila Deportiva',   price: 120.00, qty: 1, icon: 'fas fa-backpack' },
  ];

  navLinks = [
    { id: 'inicio',   label: 'Inicio',   href: '/',         icon: 'fas fa-home' },
    { id: 'nosotros', label: 'Nosotros', href: '/nosotros', icon: 'fas fa-info-circle' },
    { id: 'tienda',   label: 'Tienda',   href: '/tienda',   icon: 'fas fa-store' },
    { id: 'blog',     label: 'Blog',     href: '/blog',     icon: 'fas fa-newspaper' },
    { id: 'contacto', label: 'Contacto', href: '/contacto', icon: 'fas fa-envelope' },
  ];

  categories = [
    { name: 'Electrónica', icon: 'fas fa-laptop' },
    { name: 'Ropa',        icon: 'fas fa-tshirt' },
    { name: 'Hogar',       icon: 'fas fa-couch' },
    { name: 'Deportes',    icon: 'fas fa-futbol' },
    { name: 'Juguetes',    icon: 'fas fa-gamepad' },
    { name: 'Alimentos',   icon: 'fas fa-shopping-basket' },
    { name: 'Salud',       icon: 'fas fa-heartbeat' },
    { name: 'Mascotas',    icon: 'fas fa-paw' },
  ];

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) this.userMenuOpen = false;
  }

  closeMenu(): void { this.menuOpen = false; }

  toggleUserMenu(): void { this.userMenuOpen = !this.userMenuOpen; }

  setActive(id: string): void {
    this.activeLink = id;
    this.closeMenu();
  }

  openLoginModal(): void {
    this.loginModalOpen = true;
    this.userMenuOpen = false;
    document.body.style.overflow = 'hidden';
  }

  closeLoginModal(): void {
    this.loginModalOpen = false;
    document.body.style.overflow = '';
  }

  openCartSidenav(): void {
    this.cartOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeCartSidenav(): void {
    this.cartOpen = false;
    document.body.style.overflow = '';
  }

  decreaseQty(item: { name: string; price: number; qty: number; icon: string }): void {
    if (item.qty > 1) item.qty--;
    else this.removeItem(item);
  }

  removeItem(item: { name: string; price: number; qty: number; icon: string }): void {
    this.cartItems = this.cartItems.filter(i => i !== item);
  }

  getSubtotal(): number {
    return this.cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
  }
}