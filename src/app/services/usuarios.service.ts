import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}

  public getUsuarios(url: string) {
    return this.http.get(url);
  }

  public getUsuario(url: string, id: string) {
    return this.http.get(url + id);
  }
}
