import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { alumno } from 'src/alumno.model';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {

  constructor(public actionSheetController: ActionSheetController) {
   }

  ngOnInit() {}

  //alumnos : any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

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


  alumno: alumno = {
    nombre: '',
    presente: false
  }

  
  alumnos: alumno[] = [];
  
  result: string = '';

  agregaAlumno(): void{
    this.alumnos.push(this.alumno);

    this.alumno = {
      nombre: '',
      presente: false
    }
  }
  


}
