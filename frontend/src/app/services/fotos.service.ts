import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(
    private http: HttpClient
  ) { }

  getFotos(){
    console.log('Entro al service');
    let respuesta = this.http.get<any[]>('http://localhost:3100/fotos');
    console.log('respuesta', respuesta);
    return respuesta;
  }

}