import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArchivosService {
  constructor(private http: HttpClient) {}
  urlBack = environment.urlBack;

  /* getFiles() {
    console.log('Obtengo archivos');
    return this.http.get<any[]>('http://localhost:3100/archivos');
  } */

  getFiles() {
    return this.http.get<any[]>(this.urlBack + 'archivos');
  }

  borraArchivo(idArchivo: string) {
    return this.http.get<any[]>(`${this.urlBack}archivos/borrar/${idArchivo}`);
  }

  borraArchivoBaseDatos(idArchivo: string) {
    return this.http.get<any[]>(
      `${this.urlBack}archivos/borrar/ArchivoBBDD/${idArchivo}`
    );
  }

  creoBaseDatos() {
    console.log('Creo Base de datos');
    return this.http.get<any[]>(this.urlBack + 'archivos/generaBDatos');
  }
}
