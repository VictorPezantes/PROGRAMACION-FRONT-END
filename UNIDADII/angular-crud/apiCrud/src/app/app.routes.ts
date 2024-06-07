import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista-empleados',
    title: 'lista-empleados',
    loadComponent: () =>
      import('./componente/lista-empleado/lista-empleado.component'),
    children: [
      {
        path: 'update-user',
        title: 'lista-empleados | Update-user',
        loadComponent: () =>
          import('./componente/update-user/update-user.component'),
      },
      {
        path: 'create-user',
        title: 'lista-empleados | Create-user',
        loadComponent: () =>
          import('./componente/create-user/create-user.component'),
      },
      {
        path: 'delete-user',
        title: 'lista-empleados | delete-user',
        loadComponent: () =>
          import('./componente/delete-user/delete-user.component'),
      }
    ],
  },
  { path: '**', redirectTo: '/lista-empleados', pathMatch: 'full' },
];
