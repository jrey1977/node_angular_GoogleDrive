import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FotosService {
  constructor(private http: HttpClient) {}

  getFotos() {
    console.log('Obtengo fotos');
    return this.http.get<any[]>('http://localhost:3100/fotos');
  }

  insertarFotos() {
    console.log('Inserto foto');
    return this.http.get<any[]>('http://localhost:3100/fotos/insertar');
  }
}
