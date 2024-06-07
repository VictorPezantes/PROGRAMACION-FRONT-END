import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../modelo/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor( private http: HttpClient) { }

  private api = "https://reqres.in/api/users"

  public getDataApi ():Observable<any>{
    return this.http.get<Empleado>(this.api)

  }

  
}
