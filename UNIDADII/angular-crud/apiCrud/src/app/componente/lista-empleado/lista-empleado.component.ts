import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicio/empleado.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleado',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './lista-empleado.component.html',
  styleUrl: './lista-empleado.component.css',
})
export default class ListaEmpleadoComponent implements OnInit {
  dataApi: any[]= [];
  showList=true

  constructor(private serviceEmployee: EmpleadoService, private router: Router) {}

  ngOnInit(): void {
    this.getUser()
  }

  hideList(){
    this.showList=!this.showList

  }
  getUser() {
    this.serviceEmployee.getDataApi().subscribe((data) => {
      this.dataApi = data.data;
      console.log("esta es mi data api",this.dataApi);
    });
  }

  navigateToCreateUser() {
    this.router.navigate(['/create-user']);
  }

  navigateToUpdateUser() {
    this.router.navigate(['update-user']);
  }
}
