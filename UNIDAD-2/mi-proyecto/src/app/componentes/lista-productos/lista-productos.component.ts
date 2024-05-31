import { Component, OnInit } from '@angular/core';
import { ServicioPorductosService } from '../../servicios/servicio-porductos.service';
import { Producto } from '../../../../types';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit{
  
  productos: Producto[] = []
  mostrarProductos = true

  constructor(public productosService: ServicioPorductosService) {  }

  ngOnInit():void {
    this.productos = this.productosService.obtenerProductos();
  }

  alternarMostrarProductos():void {
    this.mostrarProductos =! this.mostrarProductos;
  }
}
