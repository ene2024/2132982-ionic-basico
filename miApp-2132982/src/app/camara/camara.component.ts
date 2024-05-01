import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(private foto: FotoServiceService) { }

  ngOnInit() {}

  tomarFoto(){

    this.foto.addNewToGallery()

  }

}
