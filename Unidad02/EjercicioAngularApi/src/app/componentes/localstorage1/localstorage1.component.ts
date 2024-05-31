import { Component } from '@angular/core';
import { LocalstorageService } from '../../servicios/localstorage.service';

@Component({
  selector: 'app-localstorage1',
  standalone: true,
  imports: [],
  templateUrl: './localstorage1.component.html',
  styleUrl: './localstorage1.component.css'
})
export default class Localstorage1Component {
  constructor(private storageService: LocalstorageService) {}

    datosRecuperados: string | null = "";
    guardarDatos(): void {
      this.storageService.setItem("usuario", "Luis Canelo");
      console.log("Datos guardados en localStorage");

    }

    recuperarDatos(): void{
      this.datosRecuperados = this.storageService.getItem('usuario');
      console.log("Datos Recuperados: ", this.datosRecuperados);
    }

    removerDatos(): void{
      this.storageService.removeItem("usuario");
      this.datosRecuperados = null;
      console.log("Datos eliminados", this.datosRecuperados);
    }

    actualizarDatos(): void {
      this.storageService.updateItem("usuario", "Alejandra");
      this.datosRecuperados = this.storageService.getItem("usuario");
      console.log("Datos actualizados de localStorage");
    }




}
