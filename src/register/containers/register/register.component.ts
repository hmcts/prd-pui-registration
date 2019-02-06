import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromRoot from '../../../app/store';
import {ActivatedRoute, Router} from '@angular/router';
import {combineLatest, Observable, Subscription} from 'rxjs';
import {arePagesLoaded, getCurrentPage, getRegistrationPagesValues} from '../../store/selectors';
import {withLatestFrom} from 'rxjs/internal/operators';

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
    private router: Router,
    private store: Store<fromStore.RegistrationState>) {}

  pageItems: any; // todo add the type
  pageValues: any;
  pageId: string;
  $routeSubscription: Subscription;
  $pageItemsSubscritpion: Subscription;
  data$: Observable<any>;
  isValidationUsed = false;

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
    this.$pageItemsSubscritpion = this.store.pipe(select(fromStore.getCurrentPageItems))
      .subscribe(formData => {
        if(this.pageId && formData.pageItems && formData.pageValues){
          this.pageValues  = formData.pageValues;
          this.pageItems = formData.pageItems ? formData.pageItems['meta'] : undefined;
        }
      });
  }

  onPageContinue(formDraft): void {

    if (formDraft.invalid ) {

      this.isValidationUsed = true;

    } else {

      this.isValidationUsed = false;
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
    this.$pageItemsSubscritpion.unsubscribe();
    this.$routeSubscription.unsubscribe();
  }

  submitdata(): void{
    this.store.dispatch( new fromStore.PostFormData())
  }
}

