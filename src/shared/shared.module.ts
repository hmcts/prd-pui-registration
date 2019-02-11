import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormsService, HmctsFormBuilderModule, ValidationService} from 'example-npm-module';
const COMPONENTS = [];

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HmctsFormBuilderModule
  ],
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  providers: [
    FormsService,
    ValidationService,
  ]
})
export class SharedModule {
}
