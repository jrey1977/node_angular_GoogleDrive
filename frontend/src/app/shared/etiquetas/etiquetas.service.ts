import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';

const base_url = environment.urlBack;

@Injectable({
  providedIn: 'root',
})
export class EtiquetasService {
  private movimientoArchivoNewToOld$: Subject<boolean>;
  private movimientoArchivoOldToNew$: Subject<boolean>;
  constructor(private http: HttpClient) {
    this.movimientoArchivoNewToOld$ = new Subject();
    this.movimientoArchivoOldToNew$ = new Subject();
  }

  setFileStateNewToOld(movimiento: boolean, idEtiqueta: string) {
    let data: any = {
      state: movimiento,
      id: idEtiqueta,
    };
    this.movimientoArchivoNewToOld$.next(data);
  }

  getFileStateNewToOld$(): Observable<boolean> {
    console.log('Se recibe boolean:');
    return this.movimientoArchivoNewToOld$.asObservable();
  }

  setFileStateOldToNew(movimiento: boolean, idEtiqueta: string) {
    let data: any = {
      state: movimiento,
      id: idEtiqueta,
    };
    this.movimientoArchivoOldToNew$.next(data);
  }

  getFileStateOldToNew$(): Observable<boolean> {
    console.log('Se recibe boolean:');
    return this.movimientoArchivoOldToNew$.asObservable();
  }

  obtenerEtiquetas(idArchivo: string) {
    console.log('Pido etiquetas del archivo', idArchivo);
    return this.http.get<any[]>(
      `http://localhost:3100/archivos/etiquetas/${idArchivo}`
    );
  }

  borrarEtiqueta(idEtiqueta: string, idArchivo: string) {
    const url = `${base_url}etiquetas/borrar`;
    return this.http.put(url, {
      idEtiqueta: idEtiqueta,
      idArchivo: idArchivo,
    });
  }

  agregarEtiqueta(nombreEtiqueta: string, idArchivo: any) {
    const url = `${base_url}etiquetas/grabar`;
    return this.http.post(url, {
      nombre: nombreEtiqueta,
      idArchivo: idArchivo,
    });
  }
}
