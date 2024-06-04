import { Component } from '@angular/core';
import { ApirestService } from '../services/apirest.service';
import { RickAndMorty } from '../../producto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

informacionApi:RickAndMorty[]=[];

constructor (private apiRestService:ApirestService){}


ngOnInit():void{
 // this.recibirDatosApi();
}

recibirDatosApi(){
  this.apiRestService.getDataApi().subscribe(
  data =>{
this.informacionApi = data;
console.log(this.informacionApi);
  });
}

}
