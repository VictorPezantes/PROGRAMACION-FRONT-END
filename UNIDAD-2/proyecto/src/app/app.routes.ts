import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', title: 'home', loadComponent:()=> import('./componentes/home/home.component')},
    {path: '**', redirectTo: '/home', pathMatch: 'full'}
];
