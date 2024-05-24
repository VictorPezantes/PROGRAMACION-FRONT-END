import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

  export const routes: Routes = [
    {path: 'productos', component: ListaProductosComponent},
    {path: '', redirectTo: '/productos', pathMatch: 'full'}
];
