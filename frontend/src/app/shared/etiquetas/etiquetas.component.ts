import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable, Subscription } from 'rxjs';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
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
export class EtiquetasComponent implements OnInit {
  public urlImg = environment.urlImgGoogle;
  public _fotoSeleccionada?: Archivo;
  public categoriaArchivo: string = '';
  public idArchivo: string = '';
  public etiquetas: any[] = [];
  public tagsDisponibles?: Etiqueta[];
  private arrayLetras: any = [];

  @Input() set fotoSeleccionada(value: Archivo) {
    this._fotoSeleccionada = value;
    this.obtenerEtiquetas(this._fotoSeleccionada.id);
    this.idArchivo = this._fotoSeleccionada.id;
  }

  mi_grupo = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hawaii'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pennsylvania'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Utah'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });
  stateGroups?: StateGroup[];

  stateGroupOptions!: Observable<StateGroup[]>;

  constructor(
    public bsModalRef: BsModalRef,
    private etiquetaService: EtiquetasService,
    private notificationService: NotificationService,
    private _formBuilder: FormBuilder
  ) {}

  public subscriptionLabels!: Subscription;

  ngOnInit(): void {
    console.log('Cargo componente etiquetas');
    this.obtenerEtiquetasAutoComplete();
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      if (this.stateGroups) {
        return this.stateGroups
          .map((group) => ({
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

  obtenerEtiquetasAutoComplete() {
    this.etiquetaService.getAllTags().subscribe((data: any) => {
      console.log('data es ', data);
      this.tagsDisponibles = data.etiquetas;
      console.log('this.tagsDisponibles', this.tagsDisponibles);
      if (this.tagsDisponibles) {
        this.obtenerPrimeraLetra(this.tagsDisponibles);
      }
    });
  }

  obtenerPrimeraLetra(etiquetas: Etiqueta[]) {
    const firstLetters = etiquetas.map((word: any) => {
      console.log('word', word.name[0].toUpperCase());
      return word.name[0].toUpperCase();
    });

    let uniqueChars = [...new Set(firstLetters.sort())];

    this.arrayLetras.push(uniqueChars);

    this.montarDatosEtiquetas(etiquetas);
  }

  montarDatosEtiquetas(tags: Etiqueta[]) {
    // Array de etiquetas
    let tagsData = tags;

    tagsData.forEach((etiqueta) => {
      var nameTag = etiqueta.name;
      var letraTag = nameTag[0].toUpperCase();
      console.log('Chequeo esta letra: ', letraTag);

      if (this.arrayLetras[0].includes(letraTag)) {
        console.log('La ha encontrado');
        console.log('this.stateGroups', this.stateGroups);
        // if ( !this.stateGroups[0] ) {
        //   var resultadosPorLetraArray:string[] = [];
        //   tagsData.forEach((obj) => {
        //     console.log('obj.name[0].toUpperCase()', obj.name[0].toUpperCase());
        //     if (obj.name[0].toUpperCase() === letraTag) {
        //       resultadosPorLetraArray.push();
        //     }
        //   });
        //   let nuevaTag:StateGroup = {
        //       letter: letraTag,
        //       names: resultadosPorLetraArray
        //   };
        //   this.stateGroups.push(nuevaTag);
        // } else {
        //   console.log('this.stateGroups no es undefined:', this.stateGroups);
        // }
      } else {
        console.log('No la ha encontrado en', this.arrayLetras);
      }
    });

    // this.arrayLetras.forEach((letrasData: string) => {
    //   console.log('letrasData iterada', letrasData);
    //   console.log('tagsData', tagsData);
    //   var letrasGuardadas = letrasData;
    //   var resultadosPorLetra = tagsData.filter((dato) => {
    //     var letraBuena = String(letrasGuardadas);
    //     letraBuena = letraBuena.toLocaleLowerCase();
    //     console.log('letraBuena', letraBuena);
    //     console.log('dato.name[0]', dato.name[0]);
    //     return dato.name[0] === letraBuena;
    //   });
    //   console.log('resultadosPorLetra en iteración', resultadosPorLetra);
    //   var arrayNombresEtiquetas: string[] = [];
    //   resultadosPorLetra.forEach((tagIterada) => {
    //     arrayNombresEtiquetas.push(tagIterada.name);
    //   });
    //   var objetoEtiqueta: StateGroup = {
    //     letter: letrasData,
    //     names: arrayNombresEtiquetas,
    //   };
    //   this.stateGroups?.push(objetoEtiqueta);
    // });

    console.log('stateGroups', this.stateGroups);
    if (this.stateGroupOptions) {
      this.stateGroupOptions = this.stateForm
        .get('stateGroup')!
        .valueChanges.pipe(
          startWith(''),
          map((value) => this._filterGroup(value))
        );
    }
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
            this.stateForm.reset();
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
