import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css'],
})
export class ListaUsuariosComponent implements OnInit {
  usuarios: any;

  constructor(
    private usuarioServices: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuarioServices
      .getUsuarios('http://localhost:8000/usuarios')
      .subscribe((respuesta) => {
        this.usuarios = respuesta;
      });
  }

  onClick(id: string) {
    let id_user = id.split(' ');
    this.router.navigate(['/prestamos/', id_user[0]]);
  }
}
