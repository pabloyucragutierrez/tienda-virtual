import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
  },
  {
    path: 'tienda',
    component: TiendaComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'iniciar-sesion',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
