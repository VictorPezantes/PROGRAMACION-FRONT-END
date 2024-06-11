import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'lista-empleados', loadComponent: ()=>import('./componentes/lista-empleado/lista-empleado.component')}, //colocar el default en el componente
    {path: '**',
        redirectTo: '/lista-empleados',
        pathMatch: 'full'
    }
];
