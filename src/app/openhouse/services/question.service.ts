import { Injectable } from '@angular/core';

import { DropdownQuestion } from './../models/question-dropdown';
import { QuestionBase } from './../models/question-base';
import { TextboxQuestion } from './../models/question-textbox';
import { CheckboxQuestion } from './../models/question-checkbox';
import { of } from 'rxjs';
import { RadioButtonQuestion } from '../models/question-radiobutton';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        required: false,
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Demo'}
        ],
        order: 8
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First Name',
        value: '',
        placeholder: 'Please provide First Name',
        required: false,
        order: 1
      }),

      new CheckboxQuestion({
        key :'sampleCheck',
        label:'Sample Check Box',
        class: 'half-width-checkboxes',
        order : 6,
        required: false,
        options: [
          {key: 'Yes',  value: 'Y'},
          {key: 'No',  value: 'N'}
        ],

      }),

      new CheckboxQuestion({
        key :'sellorbuy',
        label:'Are you interested in Selling or Buying',
        class: 'half-width-checkboxes',
        order : 6,
        required: false,
        options: [
          {key: 'Selling',  value: 'Yes'},
          {key: 'Buying',  value: 'Yes'}
        ],

      }),

      new RadioButtonQuestion({
        key :'radioTest',
        label:'Radio Select Test',
        class: 'half-width-checkboxes',
        order : 4,
        required: false,
        function: 'myFunction',
        options: [
          {key: 'Yes',  value: 'Y' , click: ''},
          {key: 'No',  value: 'N',  click: ''},
        ],

      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Contact Email',
        type: 'email',
        order: 3,
        placeholder: 'Please provide Email Address',
        required: true,
      }),
      new TextboxQuestion({
        key: 'lastName',
        label: 'Last Name',
        value: '',
        placeholder: 'Please provide Last Name',
        
        order: 2,
        required: false,
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}
