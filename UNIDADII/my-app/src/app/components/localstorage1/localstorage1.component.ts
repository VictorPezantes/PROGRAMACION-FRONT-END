import { Component } from '@angular/core';
import { LocalstorageService } from '../../servicio/localstorage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-localstorage1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './localstorage1.component.html',
  styleUrl: './localstorage1.component.css'
})
export default class Localstorage1Component {

  constructor(private storageService: LocalstorageService){}

  datosRecuperados : string | null= "";
  name:string=""
  message=""

  

  guardarDatos (): void{
    this.storageService.setItem("usuario", "Juan Perez" )
    console.log("Datos guardados en el localStorage");
  }

  getUser(): string | null {
    return this.datosRecuperados= this.storageService.getItem("usuario")
  }

  updateUser():void {
    this.storageService.updateItem("usuario", this.name)
    console.log(this.name);
  }

  deleteUser():void{
    this.storageService.removeItem("usuario")
    this.message= "Se ha eliminado con exito"
  }
}
