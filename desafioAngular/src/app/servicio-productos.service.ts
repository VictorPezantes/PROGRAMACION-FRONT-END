import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ServicioProductosService {

  constructor() { }

  obtenerProductos(): Producto[] {
    return [
      { nombre: 'Laptop', precio: 1000, color: 'Negro', tamano: '15 pulgadas', tipo: 'Electrónico', anoFabricacion: 2022 },
      { nombre: 'Smartphone', precio: 800, color: 'Blanco', tamano: '6 pulgadas', tipo: 'Electrónico', anoFabricacion: 2021 },
      { nombre: 'Tablet', precio: 500, color: 'Gris', tamano: '10 pulgadas', tipo: 'Electrónico', anoFabricacion: 2020 },
      { nombre: 'Mesa', precio: 200, color: 'Marrón', tamano: 'Grande', tipo: 'Mueble', anoFabricacion: 2019 },
      { nombre: 'Silla', precio: 100, color: 'Negro', tamano: 'Mediano', tipo: 'Mueble', anoFabricacion: 2018 },
      { nombre: 'Ventilador', precio: 50, color: 'Blanco', tamano: 'Pequeño', tipo: 'Electrodoméstico', anoFabricacion: 2017 },
      { nombre: 'Cafetera', precio: 70, color: 'Rojo', tamano: 'Pequeño', tipo: 'Electrodoméstico', anoFabricacion: 2021 },
      { nombre: 'Impresora', precio: 150, color: 'Negro', tamano: 'Mediano', tipo: 'Electrónico', anoFabricacion: 2020 },
      { nombre: 'Televisor', precio: 600, color: 'Negro', tamano: '55 pulgadas', tipo: 'Electrónico', anoFabricacion: 2022 },
      { nombre: 'Microondas', precio: 90, color: 'Blanco', tamano: 'Mediano', tipo: 'Electrodoméstico', anoFabricacion: 2019 }
    ];
  }

}
