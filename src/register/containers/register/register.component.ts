import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormsService} from '../../../app/containers/form-builder/services/form-builder.service';
import {ValidationService} from '../../../app/containers/form-builder/services/form-builder-validation.service';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRoot from '../../../app/store';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

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
    private route: ActivatedRoute,
    private store: Store<fromStore.RegistrationState>) {}

  formDraft: FormGroup;
  pageItems: any;
  $formDraftSubscription: Subscription;

  ngOnInit(): void {
    this.subscribeToRoute();
    // this.store.dispatch(new fromStore.LoadRegistrationForm());


    // this.$formDraftSubscription = this.store.pipe(select(fromStore.getRegistationEntities))
    //   .subscribe(formData => {
    //   this.pageItems = formData['meta']
    //   // this.createForm(this.pageItems, formData['formValues']);
    // });
  }


  // createForm(pageitems, pageValues) {
  //   this.formDraft = new FormGroup(this.formsService.defineformControls(pageitems, pageValues));
  //   const formGroupValidators = this.validationService.createFormGroupValidators(this.formDraft, pageitems.formGroupValidators);
  //   this.formDraft.setValidators(formGroupValidators);
  // }

  onNavigate(pageId) {
    this.store.dispatch( new fromRoot.Go({
      path: ['/register', pageId]
    }));
  }

  subscribeToRoute() {
    this.route.paramMap.subscribe(snapshot => {
      const pageId = snapshot.get('pageId');
      if (pageId) {
        this.store.dispatch(new fromStore.SetCurrentPage(pageId));
        this.store.dispatch(new fromStore.LoadPageItems(pageId));
      }
    });
  }

  ngOnDestroy(): void {
    this.$formDraftSubscription.unsubscribe();
  }
}

