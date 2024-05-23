import { Injectable } from '@angular/core';
import { Producto } from '../../../types';

@Injectable({
  providedIn: 'root'
})
export class ServicioPorductosService {

  constructor() { }

  productos: Producto[] = [
    {
      nombre: "Televisor",
      precio: 300,
      color: "Negro",
      size: "55 pulgadas",
      tipo: "Electrónico",
      anioFabricacion: 2022
    },
    {
      nombre: "Laptop",
      precio: 1200,
      color: "Plata",
      size: "15 pulgadas",
      tipo: "Electrónico",
      anioFabricacion: 2023
    },
    {
      nombre: "Refrigerador",
      precio: 800,
      color: "Blanco",
      size: "350 litros",
      tipo: "Electrodoméstico",
      anioFabricacion: 2021
    },
    {
      nombre: "Smartphone",
      precio: 700,
      color: "Negro",
      size: "6.1 pulgadas",
      tipo: "Electrónico",
      anioFabricacion: 2023
    },
    {
      nombre: "Lavadora",
      precio: 600,
      color: "Gris",
      size: "8 kg",
      tipo: "Electrodoméstico",
      anioFabricacion: 2022
    },
    {
      nombre: "Microondas",
      precio: 150,
      color: "Blanco",
      size: "25 litros",
      tipo: "Electrodoméstico",
      anioFabricacion: 2020
    },
    {
      nombre: "Cafetera",
      precio: 100,
      color: "Negro",
      size: "1.5 litros",
      tipo: "Electrodoméstico",
      anioFabricacion: 2021
    },
    {
      nombre: "Tablet",
      precio: 400,
      color: "Dorado",
      size: "10 pulgadas",
      tipo: "Electrónico",
      anioFabricacion: 2023
    },
    {
      nombre: "Impresora",
      precio: 200,
      color: "Blanca",
      size: "Mediana",
      tipo: "Electrónico",
      anioFabricacion: 2022
    },
    {
      nombre: "Auriculares",
      precio: 150,
      color: "Negro",
      size: "N/A",
      tipo: "Electrónico",
      anioFabricacion: 2023
    }
     
    ] 

  obtenerProductos(){
    return this.productos
  }

  // añadirProductos(producto: Producto){
  //   this.productos.
  // }
}


