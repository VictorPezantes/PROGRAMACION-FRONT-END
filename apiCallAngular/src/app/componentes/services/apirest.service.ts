import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { RickAndMorty } from '../../producto';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  constructor(private http: HttpClient) { }


 private urlApi= "https://rickandmortyapi.com/api/character/1,183";

public getDataApi():Observable<RickAndMorty[]>{
  return this.http.get<RickAndMorty[]>(this.urlApi);
}



}
