import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormsService} from './services/form-builder.service';
import {ValidationService} from './services/form-builder-validation.service';

/**
 * Form Builder Wrapper
 *
 */


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html'
})

export class FromBuilderComponent implements OnInit, OnChanges {

  constructor(
    private formsService: FormsService,
    private validationService: ValidationService) {}

  @Input() pageItems: any;
  @Input() pageValues: any;
  @Input() useValidation = true;
  @Output() submitPage = new EventEmitter<FormGroup>();

  formDraft: FormGroup;
  isValid: boolean;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pageItems.currentValue && changes.pageValues.currentValue) {
      this.createForm();
    }
  }

  createForm() {
    this.formDraft = new FormGroup(this.formsService.defineformControls(this.pageItems, this.pageValues));

    const formGroupValidators = this.validationService.createFormGroupValidators(this.formDraft, this.pageItems.formGroupValidators);
    this.formDraft.setValidators(formGroupValidators);

    this.isValid = this.formDraft.status === 'VALID';
  }

  onFormSubmit() {
    const { value } = this.formDraft;
    this.submitPage.emit({ ...value });
  }
}
