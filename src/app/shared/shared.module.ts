import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FromBuilderComponent} from '../containers';


@NgModule( {
  imports: [
    FormsModule, CommonModule,
  ],
  declarations: [
    FromBuilderComponent
  ],
  exports: [
    FromBuilderComponent
  ]
} )
export class SharedModule {
}
