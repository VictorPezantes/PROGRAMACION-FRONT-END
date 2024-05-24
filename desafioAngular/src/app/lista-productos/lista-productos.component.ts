import { Component, OnInit  } from '@angular/core';
import { Producto } from '../producto';
import { ServicioProductosService } from '../servicio-productos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, FormStyle } from '@angular/common';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  productos: Producto[] = [];
  mostrarProductos: boolean = true;

  constructor(private servicioProductos: ServicioProductosService) {}

  ngOnInit(): void {
    this.productos = this.servicioProductos.obtenerProductos();
  }

  alternarMostrarProductos(): void {
    this.mostrarProductos = !this.mostrarProductos;
  }
}
