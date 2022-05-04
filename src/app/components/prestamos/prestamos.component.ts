import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrestamosService } from 'src/app/services/prestamos.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css'],
})
export class PrestamosComponent implements OnInit {
  public id: any;
  public usuario: any;
  public data: any;
  public detalles: any;
  public total = 0;

  constructor(
    private usuarioServices: UsuariosService,
    private prestamoService: PrestamosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.id = params.id;
    });

    this.getUsuarios();
    this.getDetalles();
    this.getPrestamo();
  }

  getUsuarios() {
    this.usuarioServices
      .getUsuario('http://localhost:8000/usuarios/', this.id)
      .subscribe((respuesta) => {
        this.usuario = respuesta;
      });
  }

  getDetalles() {
    this.usuarioServices
      .getUsuario('http://localhost:8000/detallesPrestamo/', this.id)
      .subscribe((respuesta) => {
        this.detalles = respuesta;
        this.getTotalPrecio();
      });
  }

  getPrestamo() {
    this.prestamoService
      .getPrestamo('http://localhost:8000/librosPrestados/', this.id)
      .subscribe((respuesta) => {
        this.data = respuesta;
      });
  }

  getTotalPrecio() {
    for (const i of this.detalles) {
      this.total += i.precio;
    }
  }
}
