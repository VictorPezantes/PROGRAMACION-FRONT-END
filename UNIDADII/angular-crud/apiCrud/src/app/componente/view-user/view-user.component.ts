import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoService } from '../../servicio/empleado.service';
import { Router } from '@angular/router';
import { EmpleadoInterface } from '../../modelo/types';
import ListaEmpleadoComponent from '../lista-empleado/lista-empleado.component';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export default class ViewUserComponent implements OnInit {
  constructor(
    private service: EmpleadoService,
    public router: Router,
    public listEmployee: ListaEmpleadoComponent
  ) {}

  userApi: EmpleadoInterface | undefined;
  id: number | undefined;
  message = '';

  ngOnInit(): void {
    this.validateInput();
  }

  validateUser() {
    if (this.id === undefined) {
      this.message = 'El campo ID no puede estar vacio';
      return;
    }

    const findEmp = this.listEmployee.dataApi.find((emp) => emp.id === this.id);

    if (!findEmp) {
      this.userApi = undefined;
      this.id = undefined;
      this.message = 'No se encontró el usuario';
      return;
    }

    this.id = undefined;
    this.message = '';
    this.userApi = findEmp;

    // this.validateInput()
  }

  navigateBack() {
    this.router.navigate(['/lista-empleado']);
  }

  validateInput() {
    if (this.id === undefined) {
      return;
    }

    // this.service.getDataById(this.id).subscribe(
    //   (data) => {
    //     this.message=""
    //     this.userApi = data.data;
    //     console.log('Datos del usuario:', data);
    //   },
    //   (error) => {
    //     this.id=undefined
    //     this.userApi=undefined
    //     this.message = error;
    //   }
    // );
  }
}
