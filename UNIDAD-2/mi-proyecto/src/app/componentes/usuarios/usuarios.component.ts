import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../servicios/usuarios.service';
import { User } from '../../../../types';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {

  userList: User[] = []
  constructor(private usuariosService: UsuariosService) {}
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.usuariosService.getUsers().subscribe({
      next: (result) => {
        this.userList = result
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
   
}
