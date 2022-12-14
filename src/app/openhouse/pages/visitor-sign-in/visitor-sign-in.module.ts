import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorSignInRoutingModule } from './visitor-sign-in-routing.module';
import { VisitorSignInComponent } from './visitor-sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    VisitorSignInComponent
  ],
  imports: [
    CommonModule,
    VisitorSignInRoutingModule,
    ReactiveFormsModule,
    MatRadioModule
  ]
})
export class VisitorSignInModule {


 }
