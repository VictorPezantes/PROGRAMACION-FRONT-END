import { Routes } from '@angular/router';
// import { Localstorage1Component } from './components/localstorage1/localstorage1.component';
// import { Localstorage2Component } from './components/localstorage2/localstorage2.component';
import { ContactoComponent } from './components/shared/contacto/contacto.component';
import { HomeComponent } from './components/shared/home/home.component';
import { NosotrosComponent } from './components/shared/nosotros/nosotros.component';

export const routes: Routes = [
    {path:"localstorage1", loadComponent:()=>import("./components/localstorage1/localstorage1.component")},
    {path:"localstorage2", loadComponent:()=>import("./components/localstorage2/localstorage2.component")},
    {path: "home", component: HomeComponent},
    {path:"contacto", component: ContactoComponent},
    {path:"nosotros", component: NosotrosComponent},
    {path:"servicios",
        title:"mis servicios",
        loadComponent:()=> import ("./components/shared/servicios/servicios.component"),
        children:[
            {path: "servicios1",
                title:"mis servicios 1",
                loadComponent: ()=>import ("./components/shared/servicio1/servicio1.component")
            },
            {path: "servicios2",
                title:"mis servicios 2",
                loadComponent: ()=>import ("./components/shared/servicio2/servicio2.component")
            }
        ]
    },
    {path: "**", redirectTo: "/home", pathMatch:"full"}
];
