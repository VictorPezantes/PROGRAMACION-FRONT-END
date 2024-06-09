import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponseInterface } from '../modelo/types';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor( private http: HttpClient) { }

  private api = "https://reqres.in/api/users"

  public getDataApi ():Observable<ResponseInterface>{
    return this.http.get<ResponseInterface>(this.api)

  }

  
}
