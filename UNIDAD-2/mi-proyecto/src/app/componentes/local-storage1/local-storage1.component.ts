import { Component } from '@angular/core';
import { LocalstorageService } from '../../sercicios/localstorage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-local-storage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './local-storage1.component.html',
  styleUrl: './local-storage1.component.css'
})
export class LocalStorageComponent {

  constructor(private storageService: LocalstorageService) {}

  datosRecuperados: string | null = ""

  clave = ""
  valor = ""

  nuevaClave = ""
  nuevoValor = ""

  key = ""

  keyEliminar = ""

  guardarDatos():void {
    this.storageService.setItem(this.clave, this.valor)
    console.log("Datos guardados en el storage");
  }

  obtenerDatos() {
    return this.datosRecuperados = this.storageService.getItem(this.key)
  }

  actualizarDatos() {
    this.storageService.updateItem(this.nuevaClave, this.nuevoValor)
  }

  eliminarDatos() {
    this.storageService.removeItem(this.keyEliminar)
  }

}
