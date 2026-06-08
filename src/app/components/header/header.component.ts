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

  closeMenu(): void {
    this.menuOpen = false;
  }

  toggleUserMenu(): void {
    this.userMenuOpen = !this.userMenuOpen;
  }

  setActive(id: string): void {
    this.activeLink = id;
    this.closeMenu();
  }
}