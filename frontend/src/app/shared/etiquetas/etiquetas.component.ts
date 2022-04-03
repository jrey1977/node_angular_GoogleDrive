import { DOCUMENT } from '@angular/common';
import {
  Component,
  ComponentFactoryResolver,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { NotificationService } from 'src/app/utils/notification/notification.service';
import { environment } from 'src/environments/environment';
import { EtiquetasService } from './etiquetas.service';
import { Etiqueta } from './models/etiquetas.interface';

export interface StateGroup {
  letter: string;
  names?: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();
  return opt.filter((item) => item.toLowerCase().indexOf(filterValue) === 0);
};
@Component({
  selector: 'app-etiquetas',
  templateUrl: './etiquetas.component.html',
  styleUrls: ['./etiquetas.component.scss'],
})
export class EtiquetasComponent implements OnInit, OnDestroy {
  public urlImg = environment.urlImgGoogle;
  public _fotoSeleccionada?: Archivo;
  public categoriaArchivo: string = '';
  public idArchivo: string = '';
  public etiquetas: any[] = [];
  public tagsDisponiblesBBDD?: Etiqueta[];
  private arrayLetras: any = [];

  @Input() set fotoSeleccionada(value: Archivo) {
    this._fotoSeleccionada = value;
    this.obtenerEtiquetas(this._fotoSeleccionada.id);
    this.idArchivo = this._fotoSeleccionada.id;
    if (this._fotoSeleccionada.etiquetas) {
      this.obtenerEtiquetasAutoComplete(this._fotoSeleccionada.etiquetas);
    }
  }

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  stateGroups: any[] = [];

  stateGroupOptions!: Observable<StateGroup[]>;

  constructor(
    public bsModalRef: BsModalRef,
    private etiquetaService: EtiquetasService,
    private notificationService: NotificationService,
    private _formBuilder: FormBuilder,
    @Inject(DOCUMENT) private document: Document
  ) {}

  public subscriptionLabels!: Subscription;

  ngOnInit(): void {
    this.document.body.classList.add('overflow-hidden');
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('overflow-hidden');
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      if (this.stateGroups) {
        return this.stateGroups
          .map((group: any) => ({
            letter: group.letter,
            names: _filter(group.names, value),
          }))
          .filter((group) => group.names.length > 0);
      }
    }

    if (this.stateGroups) {
      return this.stateGroups;
    } else {
      return [
        {
          letter: 'Fake',
          names: ['Fake'],
        },
      ];
    }
  }

  obtenerEtiquetasAutoComplete(arrayEtiquetasParaExcluir: string[]) {
    console.log('Etiquetas que debería excluir:', arrayEtiquetasParaExcluir);
    this.etiquetaService.getAllTags().subscribe((data: any) => {
      console.log(
        'this.tagsDisponibles length antes del filtrado:',
        data.etiquetas.length
      );
      this.tagsDisponiblesBBDD = data.etiquetas.filter(
        (tagIterado: Etiqueta) => {
          if (tagIterado._id) {
            if (arrayEtiquetasParaExcluir.indexOf(tagIterado?._id) === -1) {
              console.log('Etiqueta para autocomplete:', tagIterado?._id);
              return tagIterado;
            } else {
              console.log('Etiqueta repetida:', tagIterado?._id);
              return false;
            }
          } else {
            console.log('No se ha encontrado id de etiqueta:', tagIterado?._id);
            return tagIterado;
          }
        }
      );
      this.tagsDisponiblesBBDD = this.tagsDisponiblesBBDD?.sort(function (
        a: any,
        b: any
      ) {
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
      console.log(
        'this.tagsDisponibles length tras filtrado:',
        this.tagsDisponiblesBBDD
      );
      if (this.tagsDisponiblesBBDD) {
        this.obtenerPrimeraLetra(this.tagsDisponiblesBBDD);
      }
    });
  }

  obtenerPrimeraLetra(etiquetasBBDD: Etiqueta[]) {
    const firstLetters = etiquetasBBDD.map((word: any) => {
      return word.name[0].toUpperCase();
    });

    let uniqueChars = [...new Set(firstLetters.sort())];

    this.arrayLetras.push(uniqueChars);

    this.montarDatosEtiquetas(etiquetasBBDD);
  }

  montarDatosEtiquetas(tagsBBDD: Etiqueta[]) {
    // Array de etiquetas
    let tagsBBDDData = tagsBBDD;

    tagsBBDDData.forEach((etiqueta) => {
      var nameTag = etiqueta.name;
      var letraTag = nameTag[0].toUpperCase();

      if (this.arrayLetras[0].includes(letraTag)) {
        // Busco en this.stateGroups si hay un objeto con letter == letraTag
        // Si no hay, creo un objeto y lo meto en this.stateGroups
        if (this.stateGroups) {
          var results = this.stateGroups.filter(
            (obj) => obj.letter == letraTag
          ).length;
        } else {
          var results = 0;
        }

        if (results > 0) {
          this.stateGroups?.forEach((obj) => {
            if (obj.letter == letraTag) {
              obj.names?.push(nameTag);
            }
          });
        } else {
          var nuevaEtiqueta = {
            letter: letraTag,
            names: [nameTag],
          };
          this.stateGroups?.push(nuevaEtiqueta);
        }
      } else {
        console.log('No la ha encontrado en', this.arrayLetras);
      }
    });

    this.stateGroupOptions = this.stateForm
      .get('stateGroup')!
      .valueChanges.pipe(
        startWith(''),
        map((value) => {
          console.log('Hay que meter una así en el autocomplete:', value);
          return this._filterGroup(value);
        })
      );
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

  borrarEtiqueta(idEtiqueta: string, nameEtiqueta: string) {
    this.etiquetaService
      .borrarEtiqueta(idEtiqueta, this.idArchivo)
      .subscribe((res: any) => {
        if (res.respuesta === 'OK') {
          console.log('Res es ', res);
          this.mostrarNotificacion('Etiqueta borrada', 'success');
          // Quito la etiqueta del listado de etiquetas en la popup
          if (this.etiquetas.length === 1) {
            this.etiquetas = [];
          } else {
            if (this._fotoSeleccionada?.id) {
              let idArchivo = this._fotoSeleccionada.id;
              this.subscriptionLabels.unsubscribe();
              this.obtenerEtiquetas(idArchivo);
            }
          }
          // Añado la etiqueta al autocomplete
          this.stateGroups.forEach((obj) => {
            if (obj.letter === nameEtiqueta[0].toUpperCase()) {
              obj.names.push(nameEtiqueta);
              obj.names.sort(function (a: any, b: any) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
              });
            }
          });
          this.etiquetaService.actualizaArchivo(idEtiqueta, this.idArchivo);
        } else {
          this.mostrarNotificacion('Error', res.respuesta, true);
        }
      });
  }

  agregaEtiqueta(nombreEtiqueta: string) {
    // Quito espacios en blanco
    let nombreEtiquetaBueno = nombreEtiqueta.trim();
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
            this.etiquetaService.actualizaArchivo(idNuevaEtiqueta, idArchivo);
            this.stateForm.reset();

            // Refresco lista de etiquetas de autocomplete
            // quitando la etiqueta que acabo de meter (si es que estaba)
            var mayLet = nombreEtiqueta[0].toUpperCase();
            var resultsLetter = this.stateGroups.find((obj) => {
              return obj.letter === mayLet;
            });
            // Busco la primera letra, a ver si ya estaba en el autocomplete
            if (resultsLetter) {
              // Estaba la letra. Ahora busco la etiqueta
              var results = this.stateGroups.find((obj) => {
                return obj.names.includes(nombreEtiqueta);
              });
              // Estaba la etiqueta también, la quito del autocomplete
              // para evitar duplicidades
              if (results != undefined) {
                var indexElem = -1;
                var indexName = -1;
                this.stateGroups.forEach((obj, i) => {
                  if (obj.letter === mayLet) {
                    if (obj.names.indexOf(nombreEtiqueta) != -1) {
                      indexElem = i;
                      indexName = obj.names.indexOf(nombreEtiqueta);
                    }
                  }
                });
                if (indexElem != -1) {
                  this.stateGroups[indexElem].names.splice(indexName, 1);
                }
              }
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
