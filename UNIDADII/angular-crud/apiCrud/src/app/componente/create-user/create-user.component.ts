import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import ListaEmpleadoComponent from '../lista-empleado/lista-empleado.component';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export default class CreateUserComponent {
  constructor(public listEmployee: ListaEmpleadoComponent, private router:Router) {}

  firstName = '';
  lastName = '';
  message = '';
  successMessage = '';
  numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  navigateBack() {
    this.router.navigate(['/lista-empleado']);
  }

  validateUser() {
    if (this.firstName.length >= 12 || this.lastName.length >= 12) {
      this.message = 'Los campos no puede ser mayor a 12 caracteres';
    } else {
      this.message = '';
    }
  }

  validateInput() {
    if (this.firstName.length === 0 || this.lastName.length === 0) {
      this.message = 'Los campos no pueden estar vacios';
      return;
    }
    if (this.firstName.length < 3 || this.lastName.length < 3) {
      this.message = 'Los campos no pueden ser menor a 3 caracteres';
      return;
    }

    if (this.firstName.length >= 12 || this.lastName.length >= 12) {
      this.message = 'Los campos no puede ser mayor a 12 caracteres';
      return;
    }

    const validateFirstName = this.firstName.split('');
    const validateLastName = this.lastName.split('');

    const numberInFirstName = validateFirstName.some((element) =>
      this.numberList.includes(element)
    );
    const numberInLastName = validateLastName.some((element) =>
      this.numberList.includes(element)
    );

    if (numberInFirstName || numberInLastName) {
      this.message = 'Los campos no pueden contener numeros';
      return;
    }

    this.successMessage = 'Se ha creado exitosamente';
  }
}
