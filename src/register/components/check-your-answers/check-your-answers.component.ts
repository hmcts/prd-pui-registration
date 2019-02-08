import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormDataValuesModel} from '../../models/form-data-values.model';
import {FormGroup} from '@angular/forms';

/**
 * Stateless component responsible for
 * displaying and submitting user's inputted data.
 */

@Component({
  selector: 'app-check-your-answers',
  templateUrl: './check-your-answers.component.html',
})
export class CheckYourAnswersComponent {

  constructor() {}

  formDataValues: FormDataValuesModel;

  @Input() set fromValues(values) {
    this.formDataValues = values;
  };

  @Output() submit = new EventEmitter();

  onSubmitData() {
    this.submit.emit();
  }


}
