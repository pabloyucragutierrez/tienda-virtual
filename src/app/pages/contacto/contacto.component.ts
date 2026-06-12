import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  isLoading = false;
  sent = false;

  form = {
    nombre:   '',
    email:    '',
    telefono: '',
    asunto:   '',
    mensaje:  '',
  };

  errors: Record<string, string> = {};

  contactInfo = [
    { icon: 'fas fa-map-marker-alt', label: 'Dirección',  value: 'Av. Principal 123, Lima, Perú' },
    { icon: 'fas fa-phone-alt',      label: 'Teléfono',   value: '+51 999 888 777' },
    { icon: 'fas fa-envelope',       label: 'Email',      value: 'hola@kintiny.pe' },
    { icon: 'fas fa-clock',          label: 'Horario',    value: 'Lun – Sáb: 9am a 7pm' },
  ];

  validate(field: string): void {
    switch (field) {
      case 'nombre':
        this.errors['nombre'] = this.form.nombre.trim() ? '' : 'El nombre es obligatorio.';
        break;
      case 'email':
        if (!this.form.email.trim()) {
          this.errors['email'] = 'El correo es obligatorio.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
          this.errors['email'] = 'Ingresa un correo válido.';
        } else {
          this.errors['email'] = '';
        }
        break;
      case 'asunto':
        this.errors['asunto'] = this.form.asunto.trim() ? '' : 'El asunto es obligatorio.';
        break;
      case 'mensaje':
        this.errors['mensaje'] = this.form.mensaje.trim() ? '' : 'El mensaje es obligatorio.';
        break;
    }
  }

  validateAll(): boolean {
    ['nombre', 'email', 'asunto', 'mensaje'].forEach(f => this.validate(f));
    return !Object.values(this.errors).some(e => e);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.validateAll()) return;

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.sent = true;
      this.form = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };
    }, 1800);
  }
}