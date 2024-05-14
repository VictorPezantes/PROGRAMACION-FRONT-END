import { Component } from '@angular/core';
import { NgModel,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {
  isActive= false;
  message:string = "Pulsa aqui"

  sesion=false
  enlace="https://cl.search.yahoo.com/search?fr=mcafee&type=E211CL885G91649&p=foto+de+perrito"

  nombre="pepito"

  toggleActive(){
    this.isActive= !this.isActive
  }

  enviar(){

  }
}

