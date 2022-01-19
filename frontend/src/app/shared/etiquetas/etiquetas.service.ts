import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Etiqueta } from './models/etiquetas.interface';

@Injectable({
  providedIn: 'root',
})
export class EtiquetasService {
  constructor(private http: HttpClient) {}

  obtenerEtiquetas(idArchivo: string) {
    console.log('Pido etiquetas del archivo', idArchivo);
    return this.http.get<any[]>(
      `http://localhost:3100/archivos/etiquetas/${idArchivo}`
    );
  }

  borrarEtiqueta(idEtiqueta: string) {
    return this.http.delete<any[]>(
      `http://localhost:3100/etiquetas/borrar/${idEtiqueta}`
    );
  }

  agregarEtiqueta(nombreEtiqueta: string) {
    return this.http.post<any[]>('http://localhost:3100/etiquetas/grabar/', {
      nombre: nombreEtiqueta,
    });
  }
}
