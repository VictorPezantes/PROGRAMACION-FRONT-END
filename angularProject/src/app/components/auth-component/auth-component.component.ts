import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, FormStyle } from '@angular/common';

@Component({
  selector: 'app-auth-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth-component.component.html',
  styleUrl: './auth-component.component.css'
})
export class AuthComponentComponent {
  isLoguin:boolean=false;
  usernameLocal:string="Alumno";
  passLocal:string="12345"
  error:string=""
  usuario:string ="";
contrasena:string ="";
lista = []
  login(){
    if (this.usernameLocal == this.usuario && this.passLocal == this.contrasena){
  this.isLoguin = true;
    }else{
this.error="Usuario o contraseña incorrecto";
    }

  
  }

  logout(){
    this.isLoguin = false;
  }

}
