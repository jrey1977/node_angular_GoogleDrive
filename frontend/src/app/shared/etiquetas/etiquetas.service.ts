import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
