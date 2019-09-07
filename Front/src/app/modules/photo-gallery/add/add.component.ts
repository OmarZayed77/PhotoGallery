import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  photoForm : FormGroup;
  photoService : PhotoService;
  router : Router;
  photo : any;

  constructor(private _photoService : PhotoService, private _router : Router) { 
    this.photoService = _photoService;
    this.router = _router;
  }
  
  ngOnInit() {
    this.photoForm = new FormGroup(
    {
      'photo': new FormControl("", [
        Validators.required
      ])
    });
  }

  onChange(event) {
    this.photo = event.target.files[0];
  }

  onSubmit(event) {
    if(this.photoForm.invalid) {
      alert("Please select a photo first!")
    }
    else {
      let photo = new FormData();
      photo.append(this.photo.name, this.photo);
      this.photoService.addImage(photo);
      this.router.navigate(['/gallery']);
    }
  }

}
