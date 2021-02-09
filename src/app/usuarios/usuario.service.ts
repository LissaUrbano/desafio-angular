import { HttpHeaders, HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario.model';

@Injectable({
    providedIn: 'root'
  })

export class UsuarioService {

    apiUrl = 'https://jsonplaceholder.typicode.com/users';

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    constructor(
        private httpClient: HttpClient
        ) { }

    public getUsuarios() : Observable<Usuario[]> {
        return this.httpClient.get<Usuario[]>(this.apiUrl);
    }

}