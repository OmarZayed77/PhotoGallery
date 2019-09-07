import { Injectable } from '@angular/core';
import Photo from '../model/photo';
import * as photosAPI from '../API/photoAPI'; 


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photos : Photo[];

  constructor() { 
    this.photos = [];
    photosAPI.getAll().then(response => {
      this.photos = response.data;
    });
  }

  deleteImage(imageName) {
    photosAPI.deleteByName(imageName).then(res => {
      this.photos = this.photos.filter(p => p.Name !== imageName);
    });
  }
  addImage(image) {
    photosAPI.add(image).then(res => {
      this.photos.push(res.data);
    })
  }
}
