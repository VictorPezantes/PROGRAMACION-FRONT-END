import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../servicio/empleado.service';
import { ActivatedRoute, NavigationEnd, RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators'
import { EmpleadoInterface } from '../../modelo/types';

@Component({
  selector: 'app-lista-empleado',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './lista-empleado.component.html',
  styleUrl: './lista-empleado.component.css',
})
export default class ListaEmpleadoComponent implements OnInit {
  dataApi: EmpleadoInterface[]= [];
  showList=true

  constructor(private serviceEmployee: EmpleadoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUser();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateShowList();
    });
  }
  updateShowList() {
    this.showList = this.route.snapshot.firstChild === null;
  }

  getUser() {
    this.serviceEmployee.getDataApi().subscribe((infoApi) => {
      this.dataApi = infoApi.data     
    });
  }

  navigateToCreateUser() {
    this.router.navigate(['lista-empleados/create-user']);
  }

  navigateToUpdateUser() {
    this.router.navigate(['lista-empleados/update-user']);
  }

  navigateToDeleteUser() {
    this.router.navigate(['lista-empleados/delete-user']);
  }
}
