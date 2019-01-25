import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormsService} from '../../../app/containers/form-builder/services/form-builder.service';
import {ValidationService} from '../../../app/containers/form-builder/services/form-builder-validation.service';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRoot from '../../../app/store';
import {ActivatedRoute} from '@angular/router';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';

/**
 * Bootstraps the Register Components
 */

@Component({
  selector: 'app-prd-register-component',
  templateUrl: './register.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush // can't use because of back btn
})
export class RegisterComponent implements OnInit, OnDestroy {

  constructor(
    private formsService: FormsService,
    private validationService: ValidationService,
    private route: ActivatedRoute,
    private store: Store<fromStore.RegistrationState>) {}

  formDraft: FormGroup;
  pageItems: any;
  pageId: string;
  $routeSubscription: Subscription;
  $pageItemsSubscritpion: Subscription;

  ngOnInit(): void {
    this.subscribeToRoute();
    this.subscribeToPageItems();
  }

  onNavigate(pageId) {
    this.store.dispatch( new fromRoot.Go({
      path: ['/register', pageId]
    }));
  }

  subscribeToRoute(): void {
    this.$routeSubscription = this.store.pipe(select(fromStore.getCurrentPage)).subscribe((routeParams) => {
      if (routeParams.pageId && routeParams.pageId !== this.pageId) { // TODO see why double call.
        this.pageId = routeParams.pageId;
        this.store.dispatch(new fromStore.LoadPageItems(this.pageId));
      }
    });
  }

  subscribeToPageItems(): void {
    this.$pageItemsSubscritpion = this.store.pipe(select(fromStore.getCurrentPageItems))
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

    this.store.dispatch(new fromStore.SaveFormData({pageId: this.pageId, formValues: event}));

    this.store.dispatch( new fromRoot.Go({
      path: ['/register', event.nextUrl]
    }));
  }

  ngOnDestroy(): void {
    this.$pageItemsSubscritpion.unsubscribe();
    this.$routeSubscription.unsubscribe();
  }

}

