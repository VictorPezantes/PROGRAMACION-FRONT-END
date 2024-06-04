import { Component } from '@angular/core';
import { ApirestService } from '../../../servicio/api/apirest.service';
import { Personaje } from '../../../../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  apiInfo : Personaje[] = []
  callApi= false
  
  constructor(private apiService: ApirestService){}

  ngOnInit():void{
    this.getDataApiService()
  }

  getDataApiService(){
    this.callApi= !this.callApi
    this.apiService.getDataApi().subscribe(
      data => {
        this.apiInfo = data
        console.log(this.apiInfo)
      }
    )
  }
}
