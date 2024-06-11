import { Component } from '@angular/core';
import { ServicioPorductosService } from '../../servicios/servicio-porductos.service';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../../types';

@Component({
  selector: 'app-agregar-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-productos.component.html',
  styleUrl: './agregar-productos.component.css'
})
export class AgregarProductosComponent {
  constructor(public servicioProductos: ServicioPorductosService) {}

  nombre = ""
  precio = 0
  color = ""
  size = ""
  tipo = ""
  anioFabricacion = 0

  producto: Producto = {
    nombre: this.nombre,
    precio: this.precio,
    color: this.color,
    size: this.size,
    tipo: this.tipo,
    anioFabricacion: this.anioFabricacion
  }

}


