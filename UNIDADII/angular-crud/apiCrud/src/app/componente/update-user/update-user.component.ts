import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import ListaEmpleadoComponent from '../lista-empleado/lista-empleado.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
})
export default class UpdateUserComponent {
  constructor(
    public listEmployee: ListaEmpleadoComponent,
    public router: Router
  ) {}

  id: number | undefined;

  firstName = '';

  message = '';
  successMessage = '';
  numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  letterList = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  navigateBack() {
    this.router.navigate(['/lista-empleado']);
  }

  validateInput() {
    this.successMessage = '';


    if (this.id === undefined) {
      this.message = 'El campo ID no puede estar vacío';
      return;
    }

    const employee = this.listEmployee.dataApi.find(
      (employee) => employee.id === this.id
    );

    if (!employee) {
      this.message = 'Empleado no encontrado';
      return;
    }

    if (this.firstName.length === 0) {
      this.message = 'Los campos no pueden estar vacios';
      return;
    }
    if (this.firstName.length < 3) {
      this.message = 'El campo nombre no pueden ser menor a 3 caracteres';
      return;
    }

    if (this.firstName.length >= 12) {
      this.message = 'Los campos no puede ser mayor a 12 caracteres';
      return;
    }

    const validateFirstName = this.firstName.split('');

    const numberInFirstName = validateFirstName.some((element) =>
      this.numberList.includes(element)
    );

    if (numberInFirstName) {
      this.message = 'Los campos no pueden contener numeros';
      return;
    }

    this.successMessage = 'Se ha modificado exitosamente';
    this.firstName = '';
    this.id = undefined;
    this.message = '';
  }
}
