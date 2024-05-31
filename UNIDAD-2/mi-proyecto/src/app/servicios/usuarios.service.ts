import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_URL: string = 'https://jsonplaceholder.typicode.com/users' 
  constructor(private httpClient: HttpClient) { }
  
  getUsers(): Observable<any> {
    return this.httpClient.get(this.API_URL).pipe(res => res)
  }
}
 