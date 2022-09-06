import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../services/question.control.service';

import { QuestionBase } from './../../models/question-base';
import { config } from './config';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  radioFunction: Function;
  optionFunction: Function;
  hideAgent: boolean = false
  sampleHide: string = "radioTest"

  config = config;


  constructor() {
    this.radioFunction = (() => { });
    this.optionFunction = (() => { });
  }


  get isValid() { return this.form.controls[this.question.key].valid; }

  ngOnInit(): void {
    if (this.question.function && this.question.function !== "" && (this as any)[this.question.function]) {
      this.radioFunction = (this as any)[this.question.function];
    }

  }

  

  showAgentInfo(e: any) {
    console.log(e);
    //alert('showAgentInfo');
  }

  myFunction(e: any) {
    console.log('The new function is : ' + e);
    if(this.hideAgent === true) {
      this.hideAgent = false;} else {
        this.hideAgent = true;
      }
    console.log('Hide Agent status: ' + this.hideAgent)
 
  }

  yourFunction(e: any) {
    console.log(e);
    //alert('yourFunction');
  }

  FunctionBuilder(func: string | undefined) {
    return (this as any )[ func as string ].bind(this);
}

}