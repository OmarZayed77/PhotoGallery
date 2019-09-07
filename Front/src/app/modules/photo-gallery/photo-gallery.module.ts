import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AngularMaterialModule} from '../angular-material/angularMaterial.module';
import { ReactiveFormsModule } from '@angular/forms';

import {GalleryComponent} from './gallery/gallery.component';
import { AddComponent } from './add/add.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
  GalleryComponent,
  AddComponent,
  CardComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
          {path:'', component: GalleryComponent},
          {path:'add', component: AddComponent}
      ]
    )
  ]
})
export class PhotoGalleryModule { }
