import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export default class ServiciosComponent {

}
