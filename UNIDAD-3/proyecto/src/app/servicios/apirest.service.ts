import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(private http: HttpClient) { }

  private urlApi = 'https://rickandmortyapi.com/api/character/1,183';

  public getDataApi():Observable<any>{
    return this.http.get<Personaje>(this.urlApi)
  }
}
