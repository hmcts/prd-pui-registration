import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormsService, HmctsFormBuilderModule, ValidationService} from 'example-npm-module';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HmctsFormBuilderModule
  ],
  providers: [
    FormsService,
    ValidationService,
  ]
})
export class SharedModule {
}
