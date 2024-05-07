import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponentComponent } from './components/auth-component/auth-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'angularProject';
  nombre= 'Cesar Briones';
  edad= 30;
  email='cesar.briones04@inacapmail.cl';
  sueldos = [1000,1200,1300];
  linksys= 'assets/avengers.jpg'
  activo=true;
  esActivo(){
    if(this.activo){
      return 'Trabajador Activo'
    }else{
      return 'Trabajador inactivo'
    }
  };
  ultimos3Sueldos(){
    let suma = 0;
for (let x =0; x<this.sueldos.length; x++)
  suma += this.sueldos[x];
return suma;
  }
  
}

