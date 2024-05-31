import { Component} from '@angular/core';
import { RouterOutlet   } from '@angular/router';
// import { PropiedadesComponent } from './components/propiedades/propiedades.component';
// import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
