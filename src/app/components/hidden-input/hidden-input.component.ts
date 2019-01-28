import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ValidationService} from '../../containers/form-builder/services/form-builder-validation.service';

@Component({
  selector: 'app-hidden-input',
  templateUrl: './hidden-input.component.html'
})
export class HiddenInputComponent {
    @Input() group: FormGroup;
    @Input() item: {
      control: string;
      classes: Array<string>
    };
    @Input() value;

    constructor() {
    }

}
