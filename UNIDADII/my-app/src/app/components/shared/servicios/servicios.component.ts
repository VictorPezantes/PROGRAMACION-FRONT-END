import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import Servicio1Component from '../servicio1/servicio1.component';
import Servicio2Component from '../servicio2/servicio2.component';
// import Servicio1Component from '../servicio1/servicio1.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export default class ServiciosComponent {

}
