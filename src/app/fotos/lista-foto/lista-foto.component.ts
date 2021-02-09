import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto.model';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-lista-foto',
  templateUrl: './lista-foto.component.html',
  styleUrls: ['./lista-foto.component.css']
})
export class ListaFotoComponent implements OnInit {
  
  constructor(private fotoService: FotoService) {}

  public fotos: Foto[] = [];

  ngOnInit(): void {
    this.getFotos();
  }

  getFotos(){
    this.fotoService.getFotos()
      .subscribe(fotos => {
        this.fotos = fotos;
        console.log(fotos);
      },
      error => console.log(error)
      );
  }


}
