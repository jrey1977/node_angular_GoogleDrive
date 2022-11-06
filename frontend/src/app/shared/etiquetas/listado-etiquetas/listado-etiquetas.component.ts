import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/utils/notification/notification.service';
import { EtiquetasService } from '../etiquetas.service';

@Component({
  selector: 'app-listado-etiquetas',
  templateUrl: './listado-etiquetas.component.html',
  styleUrls: ['./listado-etiquetas.component.scss'],
})
export class ListadoEtiquetasComponent implements OnInit, OnDestroy {
  _arrayEtiquetas?: string[];
  arrayNombres?: any[];
  idArchivoBorrado: string = '';
  

  @Input() set arrayEtiquetas(valores: string[]) {
    this._arrayEtiquetas = valores;
    this.etiquetaService
      .obtenerNombresEtiquetas(this._arrayEtiquetas)
      .subscribe((datosRecibidos: any) => {
        console.log('Datos recibidos:', Object.values(datosRecibidos.nombres));
        this.arrayNombres = Object.values(datosRecibidos.nombres);
      });
  }

  // obtenerNombresEtiquetas(valores: string[]){
  //   this._arrayEtiquetas = valores;
  //   this.etiquetaService
  //     .obtenerNombresEtiquetas(this._arrayEtiquetas)
  //     .subscribe((datosRecibidos: any) => {
  //       console.log('Datos recibidos:', Object.values(datosRecibidos.nombres));
  //       this.arrayNombres = Object.values(datosRecibidos.nombres);
  //     }).unsubscribe();
  // }

  @Input() set idArchivo(idArchivo: string) {
    this.idArchivoBorrado = idArchivo;
    console.log('Resultado del test: ', this.idArchivoBorrado);
  }

  constructor(private etiquetaService: EtiquetasService, private notificationService: NotificationService) {}

  public subscriptionLabels!: Subscription;

  ngOnInit():void {
    // Suscripción: para actualizar fichero con una etiqueta nueva o con una etiqueta menos
    this.etiquetaService.getArchivosActualizados$().subscribe((data: any) => {
      console.log('39');
        if (this.idArchivoBorrado == data.idArchivoData) {
          let etiquetasData = [];
          etiquetasData.push(data.idNuevasEtiquetasData);
          console.log('etiquetasData', etiquetasData)
          etiquetasData.forEach( (tag:any)=>{
              var indexEtiqueta = this.arrayNombres?.indexOf(tag);
              if ( indexEtiqueta && this.arrayNombres && this.arrayNombres.indexOf(tag) != -1) {
                this.arrayNombres?.splice(indexEtiqueta, 1);
              } else {
                this.arrayNombres?.push(tag);
              }
          });
        }
    });
  }

  obtenerEtiquetas(idParam: string) {
    this.subscriptionLabels = this.etiquetaService
      .obtenerEtiquetas(idParam)
      .subscribe((res: any) => {
        this.arrayNombres = Object.values(res.arrayLabelNames);
        console.log('Etiquetas obtenidas: ',Object.values(res.arrayLabelNames));
      });
  }
  
  borrarEtiqueta(idEtiqueta: string, nameEtiqueta: string) {
    this.etiquetaService
      .borrarEtiqueta(idEtiqueta, this.idArchivoBorrado)
      .subscribe((res: any) => {
        if (res.respuesta === 'OK') {
          this.mostrarNotificacion('Etiqueta borrada', 'success');
          // Quito la etiqueta del listado de etiquetas en la popup
          if (this.arrayNombres?.length === 1) {
            this.arrayNombres = [];
          } else {
              this.subscriptionLabels?.unsubscribe();
              this.obtenerEtiquetas(this.idArchivoBorrado);
          }
          this.etiquetaService.actualizaArchivo(idEtiqueta, this.idArchivo);
        } else {
          this.mostrarNotificacion('Error', res.respuesta, true);
        }
      });
  }

  mostrarNotificacion(mensaje: string, tipo: string, fixed?: boolean) {
    let note = {
      message: mensaje,
      type: tipo,
      fixed: fixed,
    };
    this.notificationService.setMessage(note);
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this._arrayEtiquetas = [];
  }

  
}
