import {Component, Input, OnInit} from '@angular/core';
import {FormDataModel} from '../../models/form-data.model';

/**
 * Stateless component responsible for
 * displaying and submitting user's inputted data.
 */

@Component({
  selector: 'app-check-your-answers',
  templateUrl: './check-your-answers.component.html',
})
export class CheckYourAnswersComponent {

  constructor() { }

  formDataValues: FormDataModel;

  @Input() set fromValues(values) {
    this.formDataValues = values;
  };


}
