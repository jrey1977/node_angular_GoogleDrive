import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(
    private http: HttpClient
  ) { }

  getFotos(){
    return this.http.get<any[]>('http://localhost:3100/fotos')
    .pipe(
      map( (resp:any) => {
        return resp.json();
      })
    )
  }

}
