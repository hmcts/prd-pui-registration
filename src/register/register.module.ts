import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {registerRouting} from './register.routing';
import {SharedModule} from '../app/shared/shared.module';

// containers
import * as fromContainers from './containers';

// components
import * as fromComponent from './components';

// services
import * as fromServices from './services';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { reducers, effects } from './store';
import {HttpClientModule} from '@angular/common/http';
import { GovukDlListItemComponent } from './components/govuk-dl-list-item/govuk-dl-list-item.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    registerRouting,
    SharedModule,
    StoreModule.forFeature('registration', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [...fromContainers.containers, ...fromComponent.components],
  declarations: [...fromContainers.containers, ...fromComponent.components],
  providers: [...fromServices.services]
})

/**
 * Entry point to RegisterModule
 */

export class RegisterModule {

}
