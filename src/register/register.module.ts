import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {registerRouting} from './register.routing';
import {SharedModule} from '../app/shared/shared.module';

// containers
import * as fromContainers from './containers';
// from app container


@NgModule({
  imports: [
    CommonModule,
    registerRouting,
    SharedModule,
  ],
  exports: [...fromContainers.containers],
  declarations: [...fromContainers.containers],
  providers: []
})

/**
 * Entry point to RegisterModule
 */

export class RegisterModule {

}
