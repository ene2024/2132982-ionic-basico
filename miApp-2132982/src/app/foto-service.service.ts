import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Foto } from 'src/userPhoto';

import { Filesystem, Directory } from '@capacitor/filesystem';

import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {

  public fotos: Foto[] = [];

  constructor() { }

  public async addNewToGallery() {    
    
    const capturedPhoto = await Camera.getPhoto({      
    
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,     
    quality: 100    
    });

    this.fotos.unshift({
      filepath: '',
      webviewPath: capturedPhoto.webPath
    });
  }
}
