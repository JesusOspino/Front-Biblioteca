import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrestamosService {
  constructor(private http: HttpClient) {}

  public getPrestamo(url: string, id: string) {
    return this.http.get(url + id);
  }
}
