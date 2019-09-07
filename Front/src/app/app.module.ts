import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularMaterialModule} from './modules/angular-material/angularMaterial.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule.forRoot(
      [
        {path: '' , component: HomeComponent},
        {path:'home', redirectTo: ''},
        {path: 'gallery', loadChildren: './modules/photo-gallery/photo-gallery.module#PhotoGalleryModule'},
        {path: '**' , component: NotFoundComponent}
      ],
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
