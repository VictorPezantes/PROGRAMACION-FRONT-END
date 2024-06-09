import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import ListaEmpleadoComponent from '../lista-empleado/lista-empleado.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css',
})
export default class DeleteUserComponent {
  constructor(public listEmployee: ListaEmpleadoComponent, private router: Router) {}

  showDeleteUser = true;

  id = '';
  messageBoolean = false;
  message = '';
  successMessage = '';
  messageWarning = '';
  letterList = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];


  navigateBack() {
    this.router.navigate(['/lista-empleado']);
  }

  warningMessage() {
    this.messageBoolean = true;
    this.messageWarning = '¿Estas seguro que deseas eliminar este usuario?';
  }

  successfulDelete() {
    this.messageBoolean = false;
    this.successMessage = 'Se ha eliminado exitosamente';
    this.id = '';
    this.message = '';
  }

  validateId() {
    this.successMessage = '';
    if (this.id.length === 0) {
      this.message = 'Los campos no pueden estar vacios';
      return;
    }

    if (this.id.length > 5) {
      this.message = 'El campo ID no puede contener mas de 5 numeros';
      return;
    }

    const validateId = this.id.split('');

    const resultValidateId = validateId.some((element) =>
      this.letterList.includes(element)
    );
    if (resultValidateId) {
      this.message = 'El campo ID no puede contener letras';
      return;
    }

    this.message = '';
    this.warningMessage();
  }
}
