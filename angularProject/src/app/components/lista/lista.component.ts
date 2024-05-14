import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, FormStyle } from '@angular/common';


@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})



export class ListaComponent {
items:string[]=["1","2","3","4"];

  lista: any = [
    {nombre: 'Juan',
  edad:30, 
  ciudad:'Madrid'},
  {nombre: 'Pedro',
  edad:25, 
  ciudad:'Rusia'},
  {nombre: 'Diego',
  edad:43, 
  ciudad:'Santiago'}];
datos:any ={nombre: 'Juan',
edad:30, 
ciudad:'Madrid'}
keys() {
  return this.lista.keys()
}

}
