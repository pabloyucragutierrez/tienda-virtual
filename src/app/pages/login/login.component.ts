import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email = '';
  password = '';
  showPassword = false;
  isLoading = false;
  emailError = '';
  passwordError = '';

  validateEmail(): void {
    if (!this.email) {
      this.emailError = 'El correo es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
      this.emailError = 'Ingresa un correo válido.';
    } else {
      this.emailError = '';
    }
  }

  validatePassword(): void {
    if (!this.password) {
      this.passwordError = 'La contraseña es obligatoria.';
    } else if (this.password.length < 6) {
      this.passwordError = 'Mínimo 6 caracteres.';
    } else {
      this.passwordError = '';
    }
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.validateEmail();
    this.validatePassword();
    if (this.emailError || this.passwordError) return;

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      console.log('Login:', { email: this.email });
    }, 1800);
  }
}