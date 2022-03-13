import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, Subject } from 'rxjs';
import { Etiqueta } from './models/etiquetas.interface';

const base_url = environment.urlBack;
const params = new HttpParams();

@Injectable({
  providedIn: 'root',
})
export class EtiquetasService {
  private movimientoArchivoNewToOld$: Subject<boolean>;
  private movimientoArchivoOldToNew$: Subject<boolean>;
  private updateTagsList$: Subject<boolean>;
  constructor(private http: HttpClient) {
    this.movimientoArchivoNewToOld$ = new Subject();
    this.movimientoArchivoOldToNew$ = new Subject();
    this.updateTagsList$ = new Subject();
  }

  setFileStateNewToOld(movimiento: boolean, idEtiqueta: string) {
    let data: any = {
      state: movimiento,
      id: idEtiqueta,
    };
    this.movimientoArchivoNewToOld$.next(data);
  }

  getFileStateNewToOld$(): Observable<boolean> {
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
    return this.movimientoArchivoOldToNew$.asObservable();
  }

  updateTags(tag: any, action: 'add' | 'remove') {
    let data: any = {
      etiqueta: tag,
      accion: action,
    };
    this.updateTagsList$.next(data);
  }

  getTagsList$(): Observable<boolean> {
    return this.updateTagsList$.asObservable();
  }

  obtenerEtiquetas(idArchivo: string) {
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

  obtenerNombresEtiquetas(arrayIds: string[]) {
    console.log('Agrego a params:', JSON.stringify(arrayIds));
    // params.append('etiquetas', { misPatrams: JSON.stringify(arrayIds)});

    const url = `${base_url}etiquetas/nombres`;
    return this.http.post(url, {
      arrayIds: arrayIds,
    });
  }
}
