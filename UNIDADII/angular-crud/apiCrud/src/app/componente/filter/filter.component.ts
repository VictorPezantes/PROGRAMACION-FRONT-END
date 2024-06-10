import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  input,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmpleadoInterface } from '../../modelo/types';
import { EmpleadoService } from '../../servicio/empleado.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent  {
  @Input() employees: EmpleadoInterface[] | undefined;

  @Output() filter = new EventEmitter<EmpleadoInterface[]>();

  name = '';
  message = '';

  search() {
    let filteredEmployees: EmpleadoInterface[] | undefined= this.employees;

    if (this.employees === undefined) {
      return;
    }
    if (this.name.trim() !== '') {
      filteredEmployees = this.employees.filter((employee) =>
        employee.first_name.toLowerCase().includes(this.name.toLowerCase())
      );
    }

    if(filteredEmployees?.length===0){
      this.message=`No se encontraron empleados con el nombre: ${this.name}`
      return
    }

    this.message=""
    this.filter.emit(filteredEmployees);
  }
}
