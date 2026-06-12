import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-detalle.component.html',
  styleUrl: './blog-detalle.component.css'
})
export class BlogDetalleComponent {

  tags = ['Tecnología', 'Gadgets', 'Tendencias', '2025'];

  relacionados = [
    { title: 'Cómo elegir el mejor smartphone para ti',     tag: 'Tecnología', date: '5 may 2025',  img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=120&q=80'  },
    { title: 'Los beneficios del yoga para mente y cuerpo', tag: 'Salud',      date: '25 abr 2025', img: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=120&q=80' },
    { title: 'Tendencias de moda para esta temporada',      tag: 'Moda',       date: '15 may 2025', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=120&q=80' },
    { title: '5 rutinas de ejercicio para hacer en casa',   tag: 'Deportes',   date: '10 may 2025', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&q=80' },
  ];
}