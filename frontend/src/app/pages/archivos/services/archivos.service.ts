import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { NotificationService } from 'src/app/utils/notification/notification.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArchivosService {
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}
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

  async borraArchivos(idsArchivos: any[], indicesArchivos: number[]) {
    console.log('Array con estas ids', idsArchivos);

    var arrayObservables: any[] = [];

    idsArchivos.forEach((idArchivo) => {
      arrayObservables.push(
        this.http.get<any[]>(`${this.urlBack}archivos/borrar/${idArchivo}`)
      );
    });

    const observable = forkJoin(arrayObservables);
    let resultsObservable = true;
    observable.subscribe({
      next: (data: any) => {
        console.log('Respuesta del observable iterado:', data.status);
        if (data.status !== 204) {
          let resultsObservable = false;
        }
      },
      complete: () => {
        this.mostrarNotificacion(
          'Se han borrado los archivos de la unidad de Google Drive',
          'success'
        );
        if (resultsObservable) {
          var arrayObservables2: any[] = [];
          idsArchivos.forEach((idArchivo) => {
            arrayObservables2.push(
              this.http.get<any[]>(
                `${this.urlBack}archivos/borrar/ArchivoBBDD/${idArchivo}`
              )
            );
          });
          const observable2 = forkJoin(arrayObservables2);
          let resultsObservable2 = true;
          observable2.subscribe({
            next: (data: any) => {
              console.log('Respuesta del observable 2 iterado:', data);
              if (data !== 'ok') {
                let resultsObservable2 = false;
              }
            },
            complete: () => {
              if (resultsObservable2) {
                this.mostrarNotificacion(
                  'Se han borrado los archivos de la unidad de MongoDB',
                  'success'
                );
              } else {
                console.log(
                  'No se han podido eliminar los archivos de MongoDB'
                );
              }
            },
          });
        } else {
          console.log('No se han podido eliminar los archivos de Google Drive');
        }
      },
    });
  }

  creoBaseDatos() {
    console.log('Creo Base de datos');
    return this.http.get<any[]>(this.urlBack + 'archivos/generaBDatos');
  }

  mostrarNotificacion(mensaje: string, tipo: string, fixed?: boolean) {
    let note = {
      message: mensaje,
      type: tipo,
      fixed: fixed,
    };
    this.notificationService.setMessage(note);
  }
}
