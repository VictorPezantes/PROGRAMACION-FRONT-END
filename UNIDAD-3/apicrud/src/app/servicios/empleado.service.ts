import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../modelo/empleado';
import { ApiResponse } from '../modelo/api-response';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlAPI = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) { }

  public getDataApi():Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.urlAPI)
  }
}
