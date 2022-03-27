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
  private updateTagsList$: Subject<boolean>;
  private filesUpdated$: Subject<boolean>;
  constructor(private http: HttpClient) {
    this.updateTagsList$ = new Subject();
    this.filesUpdated$ = new Subject();
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

  getArchivosActualizados$(): Observable<boolean> {
    return this.filesUpdated$.asObservable();
  }

  actualizaArchivo(idNuevaEtiqueta: string, idArchivo: string) {
    let data: any = {
      idNuevaEtiquetaData: idNuevaEtiqueta,
      idArchivoData: idArchivo,
    };
    this.filesUpdated$.next(data);
  }

  getAllTags() {
    return this.http.get<Etiqueta[]>(
      `http://localhost:3100/archivos/etiquetas/`
    );
  }
}
