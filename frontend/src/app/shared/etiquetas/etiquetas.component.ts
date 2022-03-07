import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { NotificationService } from 'src/app/utils/notification/notification.service';
import { environment } from 'src/environments/environment';
import { EtiquetasService } from './etiquetas.service';
import { Etiqueta } from './models/etiquetas.interface';

@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.scss'],
})
export class EtiquetasComponent implements OnInit {
  public urlImg = environment.urlImgGoogle;
  public _fotoSeleccionada?: Archivo;
  public categoriaArchivo: string = '';
  public idArchivo: string = '';

  @Input() set fotoSeleccionada(value: Archivo) {
    this._fotoSeleccionada = value;
    this.obtenerEtiquetas(this._fotoSeleccionada.id);
    this.idArchivo = this._fotoSeleccionada.id;
  }

  public etiquetas: any[] = [];
  constructor(
    public bsModalRef: BsModalRef,
    private etiquetaService: EtiquetasService,
    private notificationService: NotificationService
  ) {}

  public subscriptionLabels!: Subscription;

  ngOnInit(): void {
    this.etiquetaService.getTagsList$().subscribe((data: any) => {
      if (data.accion === 'add') {
        console.log('Meto etiqueta en la lista');
      } else {
        console.log('Saco etiqueta de la lista');
      }
    });
  }

  async obtenerEtiquetas(idParam: string) {
    console.log('entro a obtenerEtiquetas');
    this.subscriptionLabels = await this.etiquetaService
      .obtenerEtiquetas(idParam)
      .subscribe((res: any) => {
        console.log('Etiquetas del archivo:', res.arrayLabelNames);
        this.etiquetas = Object.values(res.arrayLabelNames);
      });
    console.log('results', this.subscriptionLabels);
  }

  borrarEtiqueta(idEtiqueta: string, indexEtiqueta: number) {
    this.etiquetaService
      .borrarEtiqueta(idEtiqueta, this.idArchivo)
      .subscribe((res: any) => {
        if (res.respuesta === 'OK') {
          console.log('Res es ', res);
          this.mostrarNotificacion('Etiqueta borrada', 'success');
          // Quito la etiqueta del listado de etiquetas en la popup

          // let etiquetaBorrada = this.etiquetas.filter(
          //   (item: { [x: string]: any }) =>
          //     'id' in item && item['id'] === idEtiqueta
          // );
          // this.etiquetaService.updateTags(etiquetaBorrada, 'remove');

          if (this.etiquetas.length === 1) {
            this.etiquetas = [];
          } else {
            if (this._fotoSeleccionada?.id) {
              let idArchivo = this._fotoSeleccionada.id;
              this.subscriptionLabels.unsubscribe();
              this.obtenerEtiquetas(idArchivo);
            }
          }

          // Si el archivo ya no tiene etiquetas lo muevo al listado de
          // archivos sin etiquetar
          if (!res.etiquetado) {
            this.etiquetaService.setFileStateNewToOld(false, this.idArchivo);
          }
        } else {
          this.mostrarNotificacion('Error', res.respuesta, true);
        }
      });
  }

  agregaEtiqueta(nombreEtiqueta: string) {
    console.log('El valor es ', nombreEtiqueta);
    // Quito espacios en blanco
    let nombreEtiquetaBueno = nombreEtiqueta.replace(/ /g, '');
    if (this._fotoSeleccionada?.id) {
      let idArchivo = this._fotoSeleccionada.id;
      this.etiquetaService
        .agregarEtiqueta(nombreEtiquetaBueno, idArchivo)
        .subscribe((res: any) => {
          console.log('res tras grabar etiqueta:', res);
          let etiquetasPrevias = res.etiquetasPrevias;
          if (res.respuesta === 'OK') {
            this.subscriptionLabels.unsubscribe();
            this.obtenerEtiquetas(idArchivo);
            if (res.etiquetasPrevias === 0) {
              console.log('Paso el archivo a la lista de etiquetados');
              this.etiquetaService.setFileStateOldToNew(true, this.idArchivo);
            }
            this.mostrarNotificacion('Etiqueta grabada', 'success');
          } else {
            this.mostrarNotificacion(`Error: ${res.respuesta}`, 'danger');
          }
        });
    }
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
