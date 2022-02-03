import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { NotificationService } from 'src/app/utils/notification/notification.service';
import { environment } from 'src/environments/environment';
import { EtiquetasService } from './etiquetas.service';

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

  ngOnInit(): void {
    console.log('Cargo componente de etiquetas');
  }

  obtenerEtiquetas(idParam: string) {
    console.log('entro a obtenerEtiquetas');
    this.etiquetaService.obtenerEtiquetas(idParam).subscribe((res: any) => {
      console.log('Etiquetas del archivo:', res.arrayLabelNames);
      this.etiquetas = Object.values(res.arrayLabelNames);
    });
  }

  borrarEtiqueta(idEtiqueta: string, indexEtiqueta: number) {
    this.etiquetaService
      .borrarEtiqueta(idEtiqueta, this.idArchivo)
      .subscribe((res: any) => {
        if (res.respuesta === 'OK') {
          this.mostrarNotificacion('Etiqueta borrada', 'success');
          this.etiquetas.splice(indexEtiqueta, 1);
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
          if (res.respuesta === 'OK') {
            this.obtenerEtiquetas(idArchivo);
            this.mostrarNotificacion('Etiqueta grabada', 'success');
          } else {
            this.mostrarNotificacion('Error', res.respuesta, true);
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
