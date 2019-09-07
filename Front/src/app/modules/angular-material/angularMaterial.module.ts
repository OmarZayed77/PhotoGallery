import { NgModule } from '@angular/core';
import {
    MatButtonModule, 
    MatToolbarModule, 
    MatCardModule, 
    MatGridListModule, 
    MatIconModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: 
    [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule
    ],
    exports: 
    [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule
    ],
})
export class AngularMaterialModule { }
