import { Component, OnInit, Input } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 
  @Input() imageName : string;
  @Input() imageUri : string;
  photoService : PhotoService;

  constructor(private _photoService : PhotoService) {
    this.photoService = _photoService;
   }

  ngOnInit() {
    
  }
  deleteImage() {
    this.photoService.deleteImage(this.imageName);
  }
}
