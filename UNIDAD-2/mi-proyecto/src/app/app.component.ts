import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-proyecto';
}
