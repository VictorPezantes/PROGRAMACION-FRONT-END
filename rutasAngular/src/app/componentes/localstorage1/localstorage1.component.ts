import { Component } from '@angular/core';
import { LocalstorageService } from '../servicios/localstorage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, FormStyle } from '@angular/common';
@Component({
  selector: 'app-localstorage1',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './localstorage1.component.html',
  styleUrl: './localstorage1.component.css'
})
export class Localstorage1Component {

  constructor(private localstorageservices: LocalstorageService) {}
datosrecuperados:string | null="";


guardardatos():void{
  this.localstorageservices.setItem("usuario","Pedrito");
  console.log("datos guardados en el localstorage");

}

obtenerDatos():void{
 this.datosrecuperados= this.localstorageservices.getItem("usuario");


}

actualizarDatos():void{
this.localstorageservices.updateItem("usuario", this.datosrecuperados);
this.obtenerDatos();
 }

 eliminarDatos():void{
  this.localstorageservices.removeItem("usuario");
  this.datosrecuperados= null;
   
   }

}
