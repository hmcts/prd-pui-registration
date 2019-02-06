import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRoot from '../../../app/store';
import {ActivatedRoute, Router} from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromStore.RegistrationState>) {}

  pageItems: any; // todo add the type
  pageValues: any;
  pageId: string;
  $routeSubscription: Subscription;
  $pageItemsSubscription: Subscription;
  data$: Observable<any>;
  isPageValid = false;

  ngOnInit(): void {
    this.subscribeToRoute();
    this.subscribeToPageItems();
    this.data$ = this.store.pipe(select(fromStore.getRegistrationPagesValues));
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
        if(this.pageId && formData.pageItems && formData.pageValues){
          this.pageValues  = formData.pageValues;
          this.pageItems = formData.pageItems ? formData.pageItems['meta'] : undefined;
        }
      });
  }

  onPageContinue(formDraft): void {

    if (formDraft.invalid ) {

      this.isPageValid = true;

    } else {

      this.isPageValid = false;
      const { value } = formDraft;
      const nextUrl = value.nextUrl;

      delete value.nextUrl; // removing nextUrl for it not to get overwriten the one from the server

      this.store.dispatch(new fromStore.SaveFormData( value));
      this.store.dispatch( new fromRoot.Go({
        path: ['/register', nextUrl]
      }));
    }


  }

  ngOnDestroy(): void {
    this.$pageItemsSubscription.unsubscribe();
    this.$routeSubscription.unsubscribe();
  }

  submitdata(): void{
    this.store.dispatch( new fromStore.PostFormData())
  }
}

