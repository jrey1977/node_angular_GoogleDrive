import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { NotificationService } from 'src/app/utils/notification/notification.service';
import { environment } from 'src/environments/environment';
import { EtiquetasService } from './etiquetas.service';
import { Etiqueta } from './models/etiquetas.interface';

export interface User {
  name: string;
}

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
  public etiquetas: any[] = [];
  public tagsDisponibles?: Etiqueta[];

  formControl = new FormControl();
  autoFilter!: Observable<string[]>;
  Items: string[] = [
    'BoJack Horseman',
    'Stranger Things',
    'Ozark',
    'Big Mouth',
  ];

  @Input() set fotoSeleccionada(value: Archivo) {
    this._fotoSeleccionada = value;
    this.obtenerEtiquetas(this._fotoSeleccionada.id);
    this.idArchivo = this._fotoSeleccionada.id;
  }

  constructor(
    public bsModalRef: BsModalRef,
    private etiquetaService: EtiquetasService,
    private notificationService: NotificationService
  ) {}

  public subscriptionLabels!: Subscription;

  ngOnInit(): void {
    /*    this.etiquetaService.getTagsList$().subscribe((data: any) => {
      if (data.accion === 'add') {
        console.log('Meto etiqueta en la lista');
      } else {
        console.log('Saco etiqueta de la lista');
      }
    }); */

    this.autoFilter = this.formControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        console.log('entro al autoFilter', value);
        return this.mat_filter(value);
      })
    );

    //this.obtenerEtiquetasAutoComplete();
  }

  private mat_filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log('mat_filter recibe:', filterValue);
    console.log('Filrto en:', this.Items);
    return this.Items.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  obtenerEtiquetasAutoComplete() {
    this.etiquetaService.getAllTags().subscribe((data: any) => {
      console.log('data es ', data);
      this.tagsDisponibles = data.etiquetas;
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
    console.log();
    // Quito espacios en blanco
    let nombreEtiquetaBueno = nombreEtiqueta.replace(/ /g, '');
    if (this._fotoSeleccionada?.id) {
      let idArchivo = this._fotoSeleccionada.id;
      this.etiquetaService
        .agregarEtiqueta(nombreEtiquetaBueno, idArchivo)
        .subscribe((res: any) => {
          let etiquetasPrevias = res.etiquetasPrevias;
          let idNuevaEtiqueta = res.idNuevaEtiqueta;
          if (res.respuesta === 'OK') {
            this.subscriptionLabels.unsubscribe();
            this.obtenerEtiquetas(idArchivo);
            if (res.etiquetasPrevias === 0) {
              this.etiquetaService.setFileStateOldToNew(true, this.idArchivo);
            }
            this.etiquetaService.actualizaArchivo(idNuevaEtiqueta, idArchivo);
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
