import { CommonModule, FormStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {

  isActive:boolean=true;
  deped:String = "Adios!";
  lado:number =5;
  isAdmin:boolean=false;
  enlace:String="https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2014/08/07/140807115216_macaco2_624x351_caters.jpg";
  decirAdios(){
    alert(this.deped);
    console.log(this.deped)
  }

  toggleActive(){
    this.isActive = !this.isActive;
  }

sumar(val1:number, val2:number){
return val1 + val2;
  }
  setZero(){

    this.isAdmin=!this.isAdmin;
  }

}
