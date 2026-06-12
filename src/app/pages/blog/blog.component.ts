import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  tag: string;
  tagId: string;
  date: string;
  author: string;
  authorImg: string;
  img: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  tabActivo = 'todos';
  paginaActual = 1;
  porPagina = 8;

  tabs = [
    { id: 'todos',      label: 'Todos'       },
    { id: 'tecnologia', label: 'Tecnología'  },
    { id: 'hogar',      label: 'Hogar'       },
    { id: 'salud',      label: 'Salud'       },
    { id: 'moda',       label: 'Moda'        },
    { id: 'deportes',   label: 'Deportes'    },
  ];

  posts: Post[] = [
    { id:1,  title: 'Los 10 gadgets imprescindibles de este año',       excerpt: 'Descubre cuáles son los dispositivos tecnológicos que están marcando tendencia y por qué deberías tenerlos.',          tag: 'Tecnología', tagId: 'tecnologia', date: '2 jun 2025',  author: 'Carlos R.',  authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80',  img: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=600&q=80' },
    { id:2,  title: 'Cómo decorar tu sala con estilo nórdico',          excerpt: 'El diseño escandinavo conquista cada vez más hogares. Los mejores consejos para lograrlo sin gastar de más.',        tag: 'Hogar',      tagId: 'hogar',      date: '28 may 2025', author: 'Lucía F.',   authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { id:3,  title: 'Guía de nutrición para deportistas',               excerpt: 'Una alimentación adecuada es clave para mejorar tu rendimiento físico y mental en cada entrenamiento.',              tag: 'Salud',      tagId: 'salud',      date: '20 may 2025', author: 'Ana V.',     authorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80',  img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80' },
    { id:4,  title: 'Tendencias de moda para esta temporada',           excerpt: 'Colores vibrantes, cortes oversized y materiales sostenibles dominan las pasarelas esta temporada.',               tag: 'Moda',       tagId: 'moda',       date: '15 may 2025', author: 'Lucía F.',   authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80', img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80' },
    { id:5,  title: '5 rutinas de ejercicio para hacer en casa',        excerpt: 'No necesitas ir al gimnasio para estar en forma. Trabaja todo el cuerpo desde la comodidad de tu hogar.',           tag: 'Deportes',   tagId: 'deportes',   date: '10 may 2025', author: 'Miguel T.',  authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',  img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80' },
    { id:6,  title: 'Cómo elegir el mejor smartphone para ti',          excerpt: 'Con tantas opciones en el mercado, encontrar el teléfono ideal puede ser difícil. Te ayudamos a decidir.',         tag: 'Tecnología', tagId: 'tecnologia', date: '5 may 2025',  author: 'Carlos R.',  authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80',  img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80' },
    { id:7,  title: 'Plantas de interior que purifican el aire',        excerpt: 'Ciertas plantas tienen la capacidad de limpiar el aire de tu hogar eliminando toxinas del ambiente.',               tag: 'Hogar',      tagId: 'hogar',      date: '1 may 2025',  author: 'Ana V.',     authorImg: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80',  img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { id:8,  title: 'Los beneficios del yoga para mente y cuerpo',      excerpt: 'El yoga va mucho más allá de la flexibilidad. Descubre cómo puede transformar tu bienestar integral.',             tag: 'Salud',      tagId: 'salud',      date: '25 abr 2025', author: 'Miguel T.',  authorImg: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',  img: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=600&q=80' },
    { id:9,  title: 'Accesorios que no deben faltar en tu outfit',      excerpt: 'Un buen accesorio transforma completamente tu look. Los básicos que toda persona debería tener.',                  tag: 'Moda',       tagId: 'moda',       date: '18 abr 2025', author: 'Lucía F.',   authorImg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80', img: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=600&q=80' },
    { id:10, title: 'Consejos para correr tu primera carrera de 5K',    excerpt: 'Con el plan correcto y la mentalidad adecuada, cualquiera puede prepararse y cruzar la meta con éxito.',           tag: 'Deportes',   tagId: 'deportes',   date: '12 abr 2025', author: 'Carlos R.',  authorImg: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80',  img: 'https://images.unsplash.com/photo-1461897104016-0b3b00cc81ee?w=600&q=80' },
  ];

  postsFiltrados: Post[] = [];

  get populares(): Post[] {
    return this.posts.slice(0, 4);
  }

  get postsPaginados(): Post[] {
    const start = (this.paginaActual - 1) * this.porPagina;
    return this.postsFiltrados.slice(start, start + this.porPagina);
  }

  get totalPages(): number {
    return Math.ceil(this.postsFiltrados.length / this.porPagina);
  }

  ngOnInit(): void {
    this.applyFilters();
  }

  setTab(id: string): void {
    this.tabActivo = id;
    this.paginaActual = 1;
    this.applyFilters();
  }

  applyFilters(): void {
    if (this.tabActivo === 'todos') {
      this.postsFiltrados = [...this.posts];
    } else {
      this.postsFiltrados = this.posts.filter(p => p.tagId === this.tabActivo);
    }
    this.paginaActual = 1;
  }

  getPagesArr(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goPage(p: number): void {
    if (p < 1 || p > this.totalPages) return;
    this.paginaActual = p;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}