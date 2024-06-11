import { Component } from '@angular/core';
import { ApirestService } from '../../servicios/apirest.service';
import { Personaje } from '../../../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  informacionApi: Personaje[] = [];
  mostrarData = false;

  constructor(private apirest: ApirestService) {}

  ngOnInit(): void {
    this.recibirDatosApi();
  }

  recibirDatosApi(){
    this.apirest.getDataApi().subscribe(
      data => {
        this.informacionApi = data
        console.log(this.informacionApi);
        
      }
    )
  }

  alternarMostrarData(){
    this.mostrarData =! this.mostrarData
  }
}
