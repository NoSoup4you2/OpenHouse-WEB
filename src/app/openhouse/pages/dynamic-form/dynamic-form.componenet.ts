import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuestionBase } from '../../models/question-base';
import { QuestionControlService } from '../../services/question.control.service';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.componenet.html',
  styleUrls: ['./dynamic-form.componenet.scss'],
  providers:  [QuestionService]
})

    export class DynamicFormComponent {
      questions$: Observable<QuestionBase<any>[]>;
    
      constructor(service: QuestionService) {
        this.questions$ = service.getQuestions();
      }
    }