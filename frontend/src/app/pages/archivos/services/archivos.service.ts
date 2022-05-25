import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { forkJoin, of, timer } from 'rxjs';

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
    console.log('Borro', idArchivo);
    return this.http.get<any[]>(`${this.urlBack}archivos/borrar/${idArchivo}`);
  }

  borraArchivoBaseDatos(idArchivo: string) {
    return this.http.get<any[]>(
      `${this.urlBack}archivos/borrar/ArchivoBBDD/${idArchivo}`
    );
  }

  async borraArchivos(idsArchivos: any[]) {
    console.log('Array con estas ids', idsArchivos);

    var arrayObservables: any[] = [];

    idsArchivos.forEach((idArchivo) => {
      arrayObservables.push(
        this.http.get<any[]>(`${this.urlBack}archivos/borrar/${idArchivo}`)
      );
    });

    const observable = forkJoin(arrayObservables);
    observable.subscribe({
      next: (value) => console.log('Respuesta del observable:', value),
      complete: () => console.log('This is how it ends!'),
    });
  }

  creoBaseDatos() {
    console.log('Creo Base de datos');
    return this.http.get<any[]>(this.urlBack + 'archivos/generaBDatos');
  }
}
