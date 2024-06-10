import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

import { ID, ResponseInterface, RootObject } from '../modelo/types';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  constructor(private http: HttpClient) {}

  private apiGetData = 'https://reqres.in/api/users';

  public getDataApi(): Observable<ResponseInterface> {
    return this.http.get<ResponseInterface>(this.apiGetData);
  }

  public getDataById(id: ID): Observable<RootObject> {
    const apiUserById = `https://reqres.in/api/users/${id}`;
    return this.http
      .get<RootObject>(apiUserById)
      .pipe(catchError(this.handleError));
  }

  

  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error instanceof HttpErrorResponse) {
      if (error.status === 404) {
        errorMessage = "No se encontró el empleado";
      } else if (error.status === 401) {
        errorMessage = "No autorizado";
      } else if (error.status === 500) {
        errorMessage = "Error interno del servidor";
      } else {
        errorMessage = `Error ${error.status}: ${error.message}`;
      }
    }

    return throwError(errorMessage);
  }
}
