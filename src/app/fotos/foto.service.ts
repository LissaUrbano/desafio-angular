import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foto } from './foto.model';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
    ) { }

  public getFotos() : Observable<Foto[]> {
    return this.httpClient.get<Foto[]>(this.apiUrl);
  }

}
