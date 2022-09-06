import { QuestionBase } from './question-base';

export class RadioButtonQuestion extends QuestionBase<string> {
  override controlType = 'radiobutton';
}