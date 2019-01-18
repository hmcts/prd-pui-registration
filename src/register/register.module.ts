import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';

// containers
import * as fromContainers from './containers';

import {registerRouting} from './register.routing';


@NgModule({
  imports: [
    CommonModule,
    registerRouting
  ],
  exports: [...fromContainers.containers],
  declarations: [...fromContainers.containers],
  providers: []
})

/**
 * Entry point to RergisterModule
 */

export class RegisterModule {

}
