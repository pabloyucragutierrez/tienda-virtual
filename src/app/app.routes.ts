import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { LoginComponent } from './pages/login/login.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TiendaDetalleComponent } from './pages/tienda-detalle/tienda-detalle.component';
import { BlogDetalleComponent } from './pages/blog-detalle/blog-detalle.component';

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
    path: 'tienda/:id',
    component: TiendaDetalleComponent,
  },
  // {
  //   path: 'blog',
  //   component: BlogComponent,
  // },
  // {
  //   path: 'blog/:id',
  //   component: BlogDetalleComponent,
  // },
  // {
  //   path: 'contacto',
  //   component: ContactoComponent,
  // },
  {
    path: 'iniciar-sesion',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
