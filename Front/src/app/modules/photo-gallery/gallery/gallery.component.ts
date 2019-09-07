import { Component, OnInit } from '@angular/core';
import Photo from '../../../model/photo';
import { PhotoService } from 'src/app/services/photo.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photoService: PhotoService;

  constructor(private _photoService : PhotoService) {
    this.photoService = _photoService;
  }

  ngOnInit() {
  }

}
