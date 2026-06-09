import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

  stats = [
    { num: '+10',   label: 'Años de experiencia' },
    { num: '+50k',  label: 'Clientes satisfechos' },
    { num: '+8k',   label: 'Productos disponibles' },
    { num: '99%',   label: 'Entregas a tiempo' },
  ];

  valores = [
    { icon: 'fas fa-shield-alt',   title: 'Confianza',    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos dolorum, maiores dolorem praesentium .' },
    { icon: 'fas fa-star',         title: 'Calidad',      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos dolorum, maiores dolorem praesentium .' },
    { icon: 'fas fa-handshake',    title: 'Compromiso',   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos dolorum, maiores dolorem praesentium .' },
    { icon: 'fas fa-leaf',         title: 'Sostenibilidad', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos dolorum, maiores dolorem praesentium .' },
    { icon: 'fas fa-lightbulb',    title: 'Innovación',   desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos dolorum, maiores dolorem praesentium .' },
    { icon: 'fas fa-users',        title: 'Comunidad',    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quos dolorum, maiores dolorem praesentium .' },
  ];

  equipo = [
    { name: 'Carlos Ramírez',  role: 'CEO & Fundador',        img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
    { name: 'Lucía Flores',    role: 'Directora de Marketing', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
    { name: 'Miguel Torres',   role: 'Jefe de Operaciones',   img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
    { name: 'Ana Villanueva',  role: 'Atención al Cliente',   img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
  ];
}