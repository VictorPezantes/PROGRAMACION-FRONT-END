import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje, Products } from '../../../../types';

@Injectable({
  providedIn: 'root',
})
export class ApirestService {
  constructor(private httpClient: HttpClient) {}

  private urlApi = 'https://rickandmortyapi.com/api/character/1,183';

  private urlProducts = 'https://fakestoreapi.com/products';

  public getDataApi(): Observable<any> {
    return this.httpClient.get<Personaje>(this.urlApi);
  }

  public getProductsApi(): Observable<Products[]> {
    return this.httpClient.get<Products[]>(this.urlProducts);
  }
}
