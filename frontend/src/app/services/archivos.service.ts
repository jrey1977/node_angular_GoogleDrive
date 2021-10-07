import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArchivosService {
  constructor(private http: HttpClient) {}

  getFiles() {
    console.log('Obtengo archivos');
    return this.http.get<any[]>('http://localhost:3100/archivos');
  }

  borraArchivo(idArchivo: string) {
    return this.http.get<any[]>(
      `http://localhost:3100/archivos/borrar/${idArchivo}`
    );
  }

  borraArchivoBaseDatos(idArchivo: string){
    return this.http.get<any[]>(
      `http://localhost:3100/archivos/borrar/ArchivoBBDD/${idArchivo}`
    );
  }

  creoBaseDatos() {
    console.log('Creo Base de datos');
    return this.http.get<any[]>('http://localhost:3100/archivos/generaBDatos');
  }
}
