import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { DynamicFormComponent } from './dynamic-form.componenet';
import { DynamicFormRoutingModule } from './dynamic-form.routing.module';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { DynamicFormBaseComponent } from './dynamic-form-base.componenet';



@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    DynamicFormBaseComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    DynamicFormRoutingModule 
  ]
})
export class DynamicFormModule {

}