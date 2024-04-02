import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {
   }

  ngOnInit() {}

  alumnos : any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Eliminar',
        icon: 'trash',
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }
  
  


}
