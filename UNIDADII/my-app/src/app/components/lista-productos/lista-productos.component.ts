import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../types';
import { ServicioProductoService } from '../../servicios/servicio-producto.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit {

    productos: Producto[]= []
    mostrarProductos = true

    constructor(private servicioProductoService: ServicioProductoService){}

    ngOnInit(): void {
      this.servicioProductoService.obtenerProductos().subscribe(
        (data: Producto[]) => {
          this.productos = data;
        },
        (error) => {
          console.error('Error al obtener productos', error);
        }
      );
    }

    alternarMostrarProductos(){
      this.mostrarProductos= !this.mostrarProductos
    }
}
