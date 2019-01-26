import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRoot from '../../../app/store';
import {ActivatedRoute} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

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
    private route: ActivatedRoute,
    private store: Store<fromStore.RegistrationState>) {}

  pageItems: any; // todo add the type
  pageValues: any;
  pageId: string;
  $routeSubscription: Subscription;
  $pageItemsSubscription: Subscription;
  formData; // todo add the type or make this observable using async pipe in html

  ngOnInit(): void {
    this.subscribeToRoute();
    this.subscribeToPageItems();
    this.store.pipe(select((state: any) => state.registration.registration.pagesValues.formValue))
      .subscribe((data) => {
        this.formData = data;
    });
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
    this.$pageItemsSubscription = this.store.pipe(select(fromStore.getCurrentPageItems))
      .subscribe(formData => {
        this.pageValues  = formData.pageValues['formValue'] ? formData.pageValues['formValue'] : {};
        this.pageItems = formData.pageItems ? formData.pageItems['meta'] : {};
      });
  }


  onPageContinue(event): void {
    const nextUrl = event.nextUrl;
    delete event.nextUrl; // removing nextUrl for it not to get overwriten the one from the server
    this.store.dispatch(new fromStore.SaveFormData( event));

    this.store.dispatch( new fromRoot.Go({
      path: ['/register', nextUrl]
    }));
  }

  ngOnDestroy(): void {
    this.$pageItemsSubscription.unsubscribe();
    this.$routeSubscription.unsubscribe();
  }

}

