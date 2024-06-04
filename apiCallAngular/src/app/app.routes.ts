import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'home', title:'Home', loadComponent:()=> import('./componentes/home/home.component')},
    { path: '**', redirectTo: '/home',pathMatch:'full' }

];
