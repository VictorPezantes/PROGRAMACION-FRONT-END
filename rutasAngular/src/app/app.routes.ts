import { Routes } from '@angular/router';
import { Localstorage1Component } from './componentes/localstorage1/localstorage1.component';
import { Localstorage2Component } from './componentes/localstorage2/localstorage2.component';
import { ContactoComponent } from './componentes/shared/contacto/contacto.component';
import { HomeComponent } from './componentes/shared/home/home.component';
import { NosotrosComponent } from './componentes/shared/nosotros/nosotros.component';


export const routes: Routes = [
    { path: 'localstorage1', component: Localstorage1Component },
    { path: 'localstorage2', component: Localstorage2Component },
    { path: 'contacto', component: ContactoComponent },
    { path: 'home', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    {
        path: 'servicios',
        title: 'mis servicios',
        loadComponent: () => import('./componentes/shared/servicios/servicios.component'),
        children: [
            {
                path: 'servicio1',
                title: 'mis servicios 1',                
                loadComponent: () => import('./componentes/shared/servicio1/servicio1.component'),

            }, {
                path: 'servicio2',
                title: 'mis servicios 2',
                loadComponent: () => import('./componentes/shared/servicio2/servicio2.component'),

            }
        ]
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },

];
