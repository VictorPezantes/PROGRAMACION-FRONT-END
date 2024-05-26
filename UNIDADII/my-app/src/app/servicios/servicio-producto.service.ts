import { Injectable } from '@angular/core';
import { Producto } from '../../../types';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioProductoService {

  constructor() { }
  productos:Producto[]=[
    {
      name: "televisor", 
      price: 300,
      color: "negro",
      size: "55 pulgadas",
      type:"electronico",
      manufacture: "2022"
    },
    {
      name: "smartphone", 
      price: 800,
      color: "azul",
      size: "6 pulgadas",
      type:"electronico",
      manufacture: "2023"
    },
    {
      name: "laptop", 
      price: 1200,
      color: "gris",
      size: "15 pulgadas",
      type:"electronico",
      manufacture: "2021"
    },
    {
      name: "televisor", 
      price: 300,
      color: "negro",
      size: "55 pulgadas",
      type:"electronico",
      manufacture: "2022"
    },
    {
      name: "lavadora", 
      price: 8200,
      color: "negro",
      size: "10 kg",
      type:"otro",
      manufacture: "2024"
    },
    {
      name: "cocina", 
      price: 1500,
      color: "blanco",
      size: "4 estufas",
      type:"otro",
      manufacture: "2022"
    },
    {
      name: "monitor", 
      price: 500,
      color: "negro",
      size: "27 pulgadas",
      type:"electronico",
      manufacture: "2024"
    },
    {
      name: "cafetera", 
      price: 100,
      color: "negro",
      size: "2 litros",
      type:"electrodomestico",
      manufacture: "2022"
    },
    {
      name: "audifonos", 
      price: 1000,
      color: "negro",
      size: "Large",
      type:"electronico",
      manufacture: "2022"
    },
    {
      name: "Camara", 
      price: 5000,
      color: "negro",
      size: "N/A",
      type:"electronico",
      manufacture: "2024"
    },
  ]


  obtenerProductos(): Observable<Producto[]> {
    return of(this.productos);
  }
}
