import { Routes } from '@angular/router';
import { LocalStorageComponent } from './componentes/local-storage1/local-storage1.component';
import { LocalStorage2Component } from './componentes/local-storage2/local-storage2.component';
import { ContactoComponent } from './componentes/shared/contacto/contacto.component';
import { HomeComponent } from './componentes/shared/home/home.component';
import { NosotrosComponent } from './componentes/shared/nosotros/nosotros.component';

export const routes: Routes = [

    {path: 'localstorage1', component: LocalStorageComponent},
    {path: 'localstorage2', component: LocalStorage2Component},
    {path: 'contacto', component: ContactoComponent},
    {path: 'home', component: HomeComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'servicios',
      title: 'mis servicios',
      loadComponent: () => import('./componentes/shared/servicios/servicios.component'),
      children: [{
        path: 'servicio1',
        title: 'mis servicios 1',
        loadComponent: () => import('./componentes/shared/servicio1/servicio1.component')
      },
      {
        path: 'servicio2',
        title: 'mis servicios 2',
        loadComponent: () => import('./componentes/shared/servicio2/servicio2.component')
      }]},
    {path: '**',redirectTo: '/home', pathMatch: 'full'}
];
