import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormsService} from '../../../app/containers/form-builder/services/form-builder.service';
import {ValidationService} from '../../../app/containers/form-builder/services/form-builder-validation.service';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRoot from '../../../app/store';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';

/**
 * Bootstraps the Register Components
 */

@Component({
  selector: 'app-prd-register-component',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {

  constructor(
    private formsService: FormsService,
    private validationService: ValidationService,
    private route: ActivatedRoute,
    private store: Store<fromStore.RegistrationState>) {}

  formDraft: FormGroup;
  pageItems: any;
  pageId: string;

  ngOnInit(): void {
    this.getPageItems();
    this.initForm();
  }

  onNavigate(pageId) {
    this.store.dispatch( new fromRoot.Go({
      path: ['/register', pageId]
    }));
  }

  getPageItems(): void {
    this.store.pipe(take(1), select(fromStore.getCurrentPage)).subscribe((routeParams) => {
      if (routeParams.pageId) {
        this.pageId = routeParams.pageId;
        this.store.dispatch(new fromStore.LoadPageItems(this.pageId));
      }
    });
  }

  initForm(): void {
    this.store.pipe(take(1), select(fromStore.getCurrentPageItems))
      .subscribe(formData => {
        if (formData) {
          this.pageItems = formData['meta'];
          this.createForm(this.pageItems, formData['formValues']);
        }
      });
  }

  createForm(pageitems, pageValues) {
    this.formDraft = new FormGroup(this.formsService.defineformControls(pageitems, pageValues));
    const formGroupValidators = this.validationService.createFormGroupValidators(this.formDraft, pageitems.formGroupValidators);
    this.formDraft.setValidators(formGroupValidators);
  }

  onPageContinue(event): void {
    debugger
  }

}

