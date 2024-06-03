import { Component } from '@angular/core';
import { LocalstorageService } from '../../servicio/localstorage.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-localstorage2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './localstorage2.component.html',
  styleUrl: './localstorage2.component.css'
})
export default class Localstorage2Component {
  constructor(private storageServicetwo: LocalstorageService){}

  //agregar
  setUserKey= ""
  setUserValue =""
  addMessage=""
  validateAdd=false

  //eliminar
  deleteUserKey=""
  deleteMessage=""
  validateDelete=false
  
  //actualizar
  updateUserKey=""
  updateUserValue=""
  updateMessage=""
  validateUpdate=false

  //recuperar
  userKey=""
  getMessage=""
  
  getData : string | null= ""

  deleteMessageClass=""

  getUser():string | null{
    if ( this.storageServicetwo.getItem(this.userKey)){
      this.getData= this.storageServicetwo.getItem(this.userKey)
      this.userKey=""
    }else{
      this.getMessage="No se ha encontrado la clave"
    }
    this.clearMessage('getMessage')

    return this.userKey=""
    
  }
  
  createUser(): void{
    this.storageServicetwo.setItem(this.setUserKey, this.setUserValue)
    this.addMessage= `Se ha creado exitosamente la clave "${this.setUserValue}"` 
    this.setUserKey=""
    this.setUserValue=""
    this.clearMessage('addMessage')
  }

  deleteUser(): void{
    if (this.storageServicetwo.getItem(this.deleteUserKey)){
      this.storageServicetwo.removeItem(this.deleteUserKey)
      this.validateDelete=true
      this.deleteMessage="Se ha eliminado exitosamente"
      this.deleteMessageClass = "alert-success";
    }else{
      this.validateDelete=false
      this.deleteMessage= "No se ha encontrado la clave"
      this.deleteMessageClass = "alert-danger";
    }
    this.deleteUserKey=""
    this.clearMessage('deleteMessage')
  }

  updateUser(): void{
    if (this.storageServicetwo.getItem(this.updateUserKey)) {
      this.storageServicetwo.updateItem(this.updateUserKey, this.updateUserValue);
      this.updateMessage = `Se ha actualizado exitosamente la clave ${this.updateUserValue}`;
    } else {
      this.updateMessage = `No se encontró la clave: ${this.updateUserKey}`;
    }
    this.updateUserKey = "";
    this.updateUserValue = "";
    this.clearMessage('updateMessage')
  }

  clearMessage(field: 'addMessage' | 'deleteMessage' | 'updateMessage' | 'getMessage'): void {
    setTimeout(() => {
      this[field] = "";
    }, 3000);
  }
  

}
