import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormsService} from '../../../app/containers/form-builder/services/form-builder.service';
import {ValidationService} from '../../../app/containers/form-builder/services/form-builder-validation.service';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Observable, Subscription} from 'rxjs';


/**
 * Bootstraps the Register Components
 */

@Component({
  selector: 'app-prd-register-component',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit, OnDestroy {

  constructor(
    private formsService: FormsService,
    private validationService: ValidationService,
    private store: Store<fromStore.RegistrationState>) {}

  formDraft: FormGroup;
  pageItems: any;
  $formDraftSubscription: Subscription;

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadRegistrationForm());
    this.$formDraftSubscription = this.store.pipe(select(fromStore.getRegistationEntities))
      .subscribe(formData => {
      console.log(formData);
      this.pageItems = formData['meta']
      this.createForm(this.pageItems, formData['formValues']);
    })
  }

  createForm(pageitems, pageValues) {
    this.formDraft = new FormGroup(this.formsService.defineformControls(pageitems, pageValues));
    const formGroupValidators = this.validationService.createFormGroupValidators(this.formDraft, pageitems.formGroupValidators);
    this.formDraft.setValidators(formGroupValidators);
  }

  ngOnDestroy(): void {
    this.$formDraftSubscription.unsubscribe();
  }
}

