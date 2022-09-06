import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckboxQuestion } from '../models/question-checkbox';

import { QuestionBase } from './../models/question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[] ) {
    const group: any = {};
    questions.forEach(question => {

      // Check if this is a CheckBox Question
        if(question instanceof CheckboxQuestion){
        
        question.options.forEach(option => {
        group[question.key+ '_' + option.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
        });
        
      } else {
        console.log(question.key)
        group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                             : new FormControl(question.value || '');
      }
    
   
    });
    console.log(group)
    return new FormGroup(group);
  }
}