import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormsService} from './services/form-builder.service';
import {ValidationService} from './services/form-builder-validation.service';
import {Subscription} from 'rxjs';

/**
 * Form Builder Wrapper
 *
 */


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html'
})

export class FromBuilderComponent implements OnInit, OnChanges, OnDestroy {

  constructor(
    private formsService: FormsService,
    private validationService: ValidationService) {}

  @Input() pageItems: any;
  @Input() pageValues: any;
  @Input() useValidation = true;
  @Output() submitPage = new EventEmitter<FormGroup>();

  formDraft: FormGroup;
  formSubscirption: Subscription;

  ngOnInit(): void {
    this.createForm();
    this.formSubscirption = this.formDraft.valueChanges.subscribe(values => {
      this.formDraft = new FormGroup(this.formsService.defineformControls(this.pageItems, values));
      this.setValidators();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pageItems.currentValue && changes.pageValues.currentValue) {
      this.createForm();
    }
  }

  createForm() {
    this.formDraft = new FormGroup(this.formsService.defineformControls(this.pageItems, this.pageValues));
    this.setValidators();
  }

  setValidators(): void {
    const formGroupValidators = this.validationService.createFormGroupValidators(this.formDraft, this.pageItems.formGroupValidators);
    this.formDraft.setValidators(formGroupValidators);
  }

  onFormSubmit() {
    const { value } = this.formDraft;
    this.submitPage.emit({ ...value });
  }

  ngOnDestroy(): void {
    // todo
    // this.formSubscirption.unsubscribe();
  }
}
