import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './../../models/question-base';
import { QuestionControlService } from './../../services/question.control.service';

@Component({
  selector: 'app-dynamic-base',
  templateUrl: './dynamic-form-base.componenet.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormBaseComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log(this.form.value)
  }
}