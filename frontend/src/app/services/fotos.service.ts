import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FotosService {
  constructor(private http: HttpClient) {}

  getFiles() {
    console.log('Obtengo archivos');
    return this.http.get<any[]>('http://localhost:3100/archivos');
  }

  insertarFotos() {
    console.log('Inserto foto');
    return this.http.get<any[]>('http://localhost:3100/fotos/insertar');
  }

  borraFoto(idFoto: string) {
    return this.http.get<any[]>(`http://localhost:3100/fotos/borrar/${idFoto}`);
  }

  creoBaseDatos() {
    console.log('Creo Base de datos');
    return this.http.get<any[]>('http://localhost:3100/archivos/generaBDatos');
  }
}
