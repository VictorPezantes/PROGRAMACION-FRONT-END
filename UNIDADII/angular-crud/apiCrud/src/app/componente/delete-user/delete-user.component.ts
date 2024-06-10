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
  constructor(
    public listEmployee: ListaEmpleadoComponent,
    private router: Router
  ) {}

  showDeleteUser = true;

  id: number | undefined;
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
    this.messageWarning = '¿Estás seguro que deseas eliminar este usuario?';
  }

  successfulDelete() {
    this.messageBoolean = false;
    this.successMessage = 'Se ha eliminado exitosamente';
    this.id = undefined;
    this.message = '';
  }

  validateId() {
    this.successMessage = '';
    if (this.id === undefined) {
      this.message = 'Los campos no pueden estar vacios';
      return;
    }

    const employeeId = this.listEmployee.dataApi.find(
      (emp) => emp.id === this.id
    );

    if (!employeeId) {
      this.message = 'No se encontró al empleado';
      return;
    }

    this.message = '';
    this.warningMessage();
  }
}
