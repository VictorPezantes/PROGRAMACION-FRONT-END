import { Component } from '@angular/core';
import { LocalstorageService } from '../servicios/localstorage.service';

@Component({
  selector: 'app-localstorage2',
  standalone: true,
  imports: [],
  templateUrl: './localstorage2.component.html',
  styleUrl: './localstorage2.component.css'
})
export class Localstorage2Component {
  
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
