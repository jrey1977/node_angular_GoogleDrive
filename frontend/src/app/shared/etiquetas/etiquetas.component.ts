import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { NotificationService } from 'src/app/utils/notification/notification.service';
import { PopupService } from 'src/app/utils/popup/services/popup.service';
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
  public _fotosSeleccionadas?: Archivo[];
  public categoriaArchivo: string = '';
  public idArchivo: string = '';
  public etiquetas: any[] = [];
  public tagsDisponiblesBBDD?: Etiqueta[];
  private arrayLetras: any = [];
  public stateEdit = false;
  public stateMultiEdit = false;
  editPopup!: Archivo;
  multiPopup!: Archivo[];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  filteredTags: Observable<string[]>;
  selectedTags: string[] = [];
  allTags: string[] = [];

  @ViewChild('tagInput') tagInput?: ElementRef<HTMLInputElement>;
  @ViewChild('tagsForm') tagsForm?: ElementRef;

  @Input() set fotoSeleccionada(value: Archivo) {
    this._fotoSeleccionada = value;
    this.obtenerEtiquetas(this._fotoSeleccionada.id);
    this.idArchivo = this._fotoSeleccionada.id;
    if (this._fotoSeleccionada.etiquetas) {
      this.obtenerEtiquetasAutoComplete(this._fotoSeleccionada.etiquetas);
    }
  }

  @Input() set fotosSeleccionadas(value: Archivo[]) {
    this._fotosSeleccionadas = value;
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
    public popupService: PopupService,
    private _formBuilder: FormBuilder,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) =>
        tag ? this.getUniqueList(this._filter(tag)) : this.getUniqueList(this.allTags.slice())
      )
    );
  }

  public subscriptionLabels!: Subscription;
  public subscriptionEditPopUp!: Subscription;
  public subscriptionEditPopUpState!: Subscription;
  public subscriptionMultiEditPopUp!: Subscription;
  public subscriptionMultiEditPopUpState!: Subscription;

  ngOnInit(): void {
    this.document.body.classList.add('overflow-hidden');

    // Me suscribo a los cambios que haya en popup de edit y multi-edit
    this.subscriptionEditPopUp = this.popupService
      .getEditPopup$()
      .subscribe((popupRecibido) => {
        this.editPopup = popupRecibido;
      });

    this.subscriptionEditPopUpState = this.popupService
      .getEditPopupState$()
      .subscribe((estado) => {
        this.stateEdit = estado;
      });

    this.subscriptionMultiEditPopUp = this.popupService
      .getMultiEditPopup$()
      .subscribe((popupRecibido) => {
        this.multiPopup = popupRecibido;
      });

    this.subscriptionMultiEditPopUpState = this.popupService
      .getMultiEditPopupState$()
      .subscribe((estado) => {
        this.stateMultiEdit = estado;
      });
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('overflow-hidden');
    this.subscriptionEditPopUp.unsubscribe();
    this.subscriptionEditPopUpState.unsubscribe();
    this.subscriptionMultiEditPopUp.unsubscribe();
    this.subscriptionMultiEditPopUpState.unsubscribe();
  }

  getUniqueList(tags: string[]) {
    return tags.filter(x => this.selectedTags.indexOf(x) === -1);
  }

  add(event: MatChipInputEvent): void {
    console.log('144', event.value);
    const value = (event.value || '').trim();

    // Add our fruit
    if ((value || "").trim()) {
      const filterList = this.getUniqueList(this.selectedTags);
      const index = filterList.indexOf(event.value);
      console.log('index', index);
      if (index === -1) {
        this.selectedTags.push(value.trim());
      }
    }
    

    // Clear the input value
    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.selectedTags.indexOf(tag);

    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    }

    this.tagCtrl.updateValueAndValidity();
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    console.log('selected');
    if(!this.selectedTags.includes(event.option.viewValue)){
      this.selectedTags.push(event.option.viewValue);
    }
    if (this.tagInput?.nativeElement) {
      this.tagInput.nativeElement.value = '';
    }
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    console.log('_filter');
    const filterValue = value.toLowerCase();

    return this.allTags.filter((tag) =>
      tag.toLowerCase().includes(filterValue)
    );
  }

  private _filterExclude(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTags.filter(
      (tag) => !tag.toLowerCase().includes(filterValue)
    );

    
  }

  obtenerEtiquetasAutoComplete(arrayEtiquetasParaExcluir: string[]) {
    this.etiquetaService.getAllTags().subscribe((data: any) => {
      this.tagsDisponiblesBBDD = data.etiquetas.filter(
        (tagIterado: Etiqueta) => {
          if (tagIterado._id) {
            if (arrayEtiquetasParaExcluir.indexOf(tagIterado?._id) === -1) {
              return tagIterado;
            } else {
              return false;
            }
          } else {
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
      if (this.tagsDisponiblesBBDD) {
        this.allTags = this.tagsDisponiblesBBDD.map((obj) => {
          return obj.name;
        });
      }
    });
  }

  async obtenerEtiquetas(idParam: string) {
    this.subscriptionLabels = await this.etiquetaService
      .obtenerEtiquetas(idParam)
      .subscribe((res: any) => {
        this.etiquetas = Object.values(res.arrayLabelNames);
      });
  }

  borrarEtiqueta(idEtiqueta: string, nameEtiqueta: string) {
    var letraEtiqueta = nameEtiqueta[0].toUpperCase();
    this.etiquetaService
      .borrarEtiqueta(idEtiqueta, this.idArchivo)
      .subscribe((res: any) => {
        if (res.respuesta === 'OK') {
          this.mostrarNotificacion('Etiqueta borrada', 'success');
          this.allTags.push(nameEtiqueta);
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
          // Compruebo si esa etiqueta la usa algún archivo más
          this.etiquetaService
            .obtenerUsosEtiqueta(idEtiqueta)
            .subscribe((data: any) => {
              // La etiqueta es usada por otros archivos: Añado la etiqueta al autocomplete
              if (
                data.usos > 0 ||
                (data.usos === 0 && data.categoria === 'si')
              ) {
                // Busco la letra en el autocomplete y hago el push en el array de nombres
                var resultsLetter = this.stateGroups.find((obj) => {
                  return obj.letter === letraEtiqueta;
                });
                if (resultsLetter) {
                  this.stateGroups.forEach((obj) => {
                    if (obj.letter === letraEtiqueta) {
                      obj.names.push(nameEtiqueta);
                      obj.names.sort(function (a: any, b: any) {
                        return a.toLowerCase().localeCompare(b.toLowerCase());
                      });
                    }
                  });
                } else {
                  // Si no está la letra de la etiqueta en el autocomplete debo meterla en el lugar que corresponde
                  var nuevoObjeto = {
                    letter: letraEtiqueta,
                    names: [nameEtiqueta],
                  };
                  this.stateGroups.push(nuevoObjeto);
                  this.stateGroups.sort((a, b) =>
                    a.letter > b.letter ? 1 : -1
                  );
                }
              }
            });

          this.etiquetaService.actualizaArchivo(idEtiqueta, this.idArchivo);
        } else {
          this.mostrarNotificacion('Error', res.respuesta, true);
        }
      });
  }

  agregaEtiquetas(etiquetasSeleccionadas: string[], etiquetaNueva: string) {
    if (etiquetaNueva != '') {
      // Quito espacios en blanco
      let nombreEtiquetaBueno = etiquetaNueva.trim();
      etiquetasSeleccionadas.push(nombreEtiquetaBueno);
    }

    if (this._fotoSeleccionada?.id) {
      let idArchivo = this._fotoSeleccionada.id;
      this.etiquetaService
        .agregarEtiquetas(etiquetasSeleccionadas, idArchivo)
        .subscribe((res: any) => {
          let etiquetasPrevias = res.etiquetasPrevias;
          let idNuevasEtiquetas = res.idNuevasEtiquetas;
          if (res.respuesta === 'OK') {
            console.log('Respuesta es OK');
            this.subscriptionLabels.unsubscribe();
            this.obtenerEtiquetas(idArchivo);
            this.etiquetaService.actualizaArchivo(idNuevasEtiquetas, idArchivo);
            this.stateForm.reset();

            //Refresco lista de etiquetas de autocomplete
            //quitando la(s) etiqueta(s) que acabo de meter
            etiquetasSeleccionadas.forEach((tag) => {
  
              this.selectedTags = this.selectedTags.filter(e => e !== tag);

              var mayLet = tag[0].toUpperCase();
              console.log('mayLet', mayLet);

              this.allTags = this.allTags.filter(e => e !== tag);

              /* var resultsLetter = this.stateGroups.find((obj) => {
                return obj.letter === mayLet;
              });
              // Busco la primera letra, a ver si ya estaba en el autocomplete
              if (resultsLetter) {
                console.log('Estaba la letra');
                // Estaba la letra. Ahora busco la etiqueta
                var results = this.stateGroups.find((obj) => {
                  return obj.names.includes(etiquetaNueva);
                });
                // Estaba la etiqueta también, la quito del autocomplete
                // para evitar duplicidades
                if (results != undefined) {
                  console.log('Estaba la etiqueta');
                  var indexElem = -1;
                  var indexName = -1;
                  this.stateGroups.forEach((obj, i) => {
                    if (obj.letter === mayLet) {
                      if (obj.names.indexOf(etiquetaNueva) != -1) {
                        indexElem = i;
                        indexName = obj.names.indexOf(etiquetaNueva);
                        console.log('Esta es la etiqueta:', indexName);
                      }
                    }
                  });
                  if (indexElem != -1) {
                    console.log('Ahora la borro');
                    this.stateGroups[indexElem].names.splice(indexName, 1);
                    // Si es la única dentro del grupo de letra, quitar la letra también
                    if (this.stateGroups[indexElem].names.length === 0) {
                      this.stateGroups.splice(indexElem, 1);
                    }
                  }
                }
              } */
            });
            this.mostrarNotificacion('Etiqueta grabada', 'success');
          } else {
            this.mostrarNotificacion(`Error: ${res.respuesta}`, 'danger');
          }
        });
    }

    // TODO: Cambiar método "agregarEtiqueta" por "agregarEtiquetas" en el etiquetaService
    // Debe poder grabar varias etiquetas de una vez

    // Quito espacios en blanco
    // let nombreEtiquetaBueno = nombreEtiqueta.trim();
    // if (this._fotoSeleccionada?.id) {
    //   let idArchivo = this._fotoSeleccionada.id;
    //   this.etiquetaService
    //     .agregarEtiqueta(nombreEtiquetaBueno, idArchivo)
    //     .subscribe((res: any) => {
    //       let etiquetasPrevias = res.etiquetasPrevias;
    //       let idNuevaEtiqueta = res.idNuevaEtiqueta;
    //       if (res.respuesta === 'OK') {
    //         this.subscriptionLabels.unsubscribe();
    //         this.obtenerEtiquetas(idArchivo);
    //         this.etiquetaService.actualizaArchivo(idNuevaEtiqueta, idArchivo);
    //         this.stateForm.reset();

    //         // Refresco lista de etiquetas de autocomplete
    //         // quitando la etiqueta que acabo de meter (si es que estaba)
    //         var mayLet = nombreEtiqueta[0].toUpperCase();
    //         var resultsLetter = this.stateGroups.find((obj) => {
    //           return obj.letter === mayLet;
    //         });
    //         // Busco la primera letra, a ver si ya estaba en el autocomplete
    //         if (resultsLetter) {
    //           // Estaba la letra. Ahora busco la etiqueta
    //           var results = this.stateGroups.find((obj) => {
    //             return obj.names.includes(nombreEtiqueta);
    //           });
    //           // Estaba la etiqueta también, la quito del autocomplete
    //           // para evitar duplicidades
    //           if (results != undefined) {
    //             var indexElem = -1;
    //             var indexName = -1;
    //             this.stateGroups.forEach((obj, i) => {
    //               if (obj.letter === mayLet) {
    //                 if (obj.names.indexOf(nombreEtiqueta) != -1) {
    //                   indexElem = i;
    //                   indexName = obj.names.indexOf(nombreEtiqueta);
    //                 }
    //               }
    //             });
    //             if (indexElem != -1) {
    //               this.stateGroups[indexElem].names.splice(indexName, 1);
    //               // Si es la única dentro del grupo de letra, quitar la letra también
    //               if (this.stateGroups[indexElem].names.length === 0) {
    //                 this.stateGroups.splice(indexElem, 1);
    //               }
    //             }
    //           }
    //         }
    //         this.mostrarNotificacion('Etiqueta grabada', 'success');
    //       } else {
    //         this.mostrarNotificacion(`Error: ${res.respuesta}`, 'danger');
    //       }
    //     });
    // }
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
