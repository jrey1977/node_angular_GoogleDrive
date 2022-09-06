import { Component, Inject, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Archivo } from 'src/app/pages/archivos/models/archivos.interface';
import { EtiquetasService } from 'src/app/shared/etiquetas/etiquetas.service';
import { Etiqueta } from 'src/app/shared/etiquetas/models/etiquetas.interface';
import { PopupService } from 'src/app/utils/popup/services/popup.service';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-popup',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '110px',
          opacity: 1,
        })
      ),
      state(
        'closed',
        style({
          height: '12px',
          opacity: 0.8,
          overflow: 'hidden',
        })
      ),
      transition('open => closed', [animate('0.3s ease-out')]),
      transition('closed => open', [animate('0.4s ease-out')]),
    ]),
  ],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  popup!: Archivo;
  statePopup: boolean = false;
  showPopup: boolean = false;
  public urlImg = environment.urlImgGoogle;
  public webContentLink: string = '';
  public etiquetas: Etiqueta[] = [];
  public mb?: string;
  public carpeta?: any;
  zoom:boolean = false;
  public isMobile: boolean = false;
  public isTablet: boolean = false;

  isOpen = false;

  constructor(
    public popupService: PopupService,
    private etiquetaService: EtiquetasService,
    private deviceService: DeviceDetectorService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();
    // Me suscribo a los cambios que haya en popup y que se envían como parámetro en
    // el "next" de la función "abrirPopup" del service
    this.popupService.getPopup$().subscribe((popupRecibido: Archivo) => {
      this.popup = popupRecibido;
      this.webContentLink = this.popup.webContentLink;
      console.log('popup es', this.popup);
      this.mb = (this.popup.size / 1000000).toFixed(2) + 'MB';
      this.etiquetaService
        .obtenerNombreCarpeta(this.popup.parents[0])
        .subscribe((data: any) => {
          this.carpeta = data.nombre;
        });
      this.obtenerEtiquetas(this.popup.id);
    });
    this.popupService.getPopupState$().subscribe((estado) => {
      this.statePopup = estado;
      if (this.statePopup) {
        this.showPopup = false;
      }
    });
  }

  zoomInOut(){
    if(!this.isMobile){
      this.zoom = !this.zoom;
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  borrarEtiqueta(etiqueta: any) {
    console.log('Etiqueta que se borra:', etiqueta);
  }

  obtenerEtiquetas(idParam: string) {
    this.etiquetas = [];
    this.etiquetaService.obtenerEtiquetas(idParam).subscribe((res: any) => {
      this.etiquetas = res.arrayLabelNames;
    });
  }

  cerrarPopup() {
    this.popupService.cerrarPopup();
    this.isOpen = false;
    this.document.body.classList.remove('overflow-hidden');
  }
}
