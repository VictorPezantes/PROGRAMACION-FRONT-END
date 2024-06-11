import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicios/empleado.service';
import { Empleado } from '../../modelo/empleado';

@Component({
  selector: 'app-lista-empleado',
  standalone: true,
  imports: [],
  templateUrl: './lista-empleado.component.html',
  styleUrl: './lista-empleado.component.css'
})
export default class ListaEmpleadoComponent implements OnInit {
  apiResponse: Empleado[]= [];

  constructor(private servicioEmpleado: EmpleadoService) {}

  ngOnInit(): void {
    this.recuperarDataApi()
  }

  recuperarDataApi(){
    this.servicioEmpleado.getDataApi().subscribe(
      data => {
        this.apiResponse = data.data;
        console.log(data.data);
      }
    )
  }
}
