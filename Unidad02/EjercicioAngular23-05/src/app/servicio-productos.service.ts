import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor() { }

  obtenerProductos(): Producto[]{
    return [
      {nombre: 'Laptop', precio: 100, color: 'negro', tamanio: '14 pulgadas', tipo: 'Electronico', anioFabricacion: 2024},
      {nombre: 'Telefono', precio: 80, color: 'blanco', tamanio: '12 cms', tipo: 'Electronico', anioFabricacion: 2024},
      {nombre: 'Laptop', precio: 200, color: 'plateado', tamanio: '17 pulgadas', tipo: 'Electronico', anioFabricacion: 2024},
      {nombre: 'Monitor', precio: 120, color: 'negro', tamanio: '20 pulgadas', tipo: 'Electronico', anioFabricacion: 2023},
      {nombre: 'Televisor', precio: 70, color: 'negro', tamanio: '43 pulgadas', tipo: 'Electronico', anioFabricacion: 2022},
      {nombre: 'Tablet', precio: 60, color: 'blanco', tamanio: '12 pulgadas', tipo: 'Electronico', anioFabricacion: 2023},
      {nombre: 'Impresora', precio: 40, color: 'negro', tamanio: 'pequeña', tipo: 'Electronica', anioFabricacion: 2022},
      {nombre: 'Silla gamer', precio: 50, color: 'azul', tamanio: 'standard', tipo: 'Mueble', anioFabricacion: 2019},
      {nombre: 'Escritorio', precio: 50, color: 'negro', tamanio: 'standard', tipo: 'Mueble', anioFabricacion: 2029},
      {nombre: 'Silla gamer', precio: 50, color: 'rojo', tamanio: 'standard', tipo: 'mueble', anioFabricacion: 2020}
    ]

  }
}
