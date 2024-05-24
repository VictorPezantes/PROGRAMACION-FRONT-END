import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor() { }

  obtenerProductos(): Producto[]{
    return [
      {nombre: 'Laptop', precio: 100, color: 'negro', tamano: '14 pulgadas', tipo: 'Electronico', anoFabricacion: 2024},
      {nombre: 'Telefono', precio: 80, color: 'blanco', tamano: '12 cms', tipo: 'Electronico', anoFabricacion: 2024},
      {nombre: 'Laptop', precio: 200, color: 'plateado', tamano: '17 pulgadas', tipo: 'Electronico', anoFabricacion: 2024},
      {nombre: 'Monitor', precio: 120, color: 'negro', tamano: '20 pulgadas', tipo: 'Electronico', anoFabricacion: 2023},
      {nombre: 'Televisor', precio: 70, color: 'negro', tamano: '43 pulgadas', tipo: 'Electronico', anoFabricacion: 2022},
      {nombre: 'Tablet', precio: 60, color: 'blanco', tamano: '12 pulgadas', tipo: 'Electronico', anoFabricacion: 2023},
      {nombre: 'Impresora', precio: 40, color: 'negro', tamano: 'pequeña', tipo: 'Electronica', anoFabricacion: 2022},
      {nombre: 'Silla gamer', precio: 50, color: 'azul', tamano: 'standard', tipo: 'Mueble', anoFabricacion: 2019},
      {nombre: 'Escritorio', precio: 50, color: 'negro', tamano: 'standard', tipo: 'Mueble', anoFabricacion: 2029},
      {nombre: 'Silla gamer', precio: 50, color: 'rojo', tamano: 'standard', tipo: 'mueble', anoFabricacion: 2020}
    ];
  }
}
