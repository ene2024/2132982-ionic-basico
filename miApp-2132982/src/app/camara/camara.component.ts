import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from 'src/userPhoto';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(public foto: FotoServiceService) { }

  public fotos: Foto[] = this.foto.fotos;

  ngOnInit() {}

  tomarFoto(){

    this.foto.addNewToGallery()

  }

}
