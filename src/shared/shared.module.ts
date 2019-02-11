import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HmctsFormBuilderModule} from '../../projects/hmcts-form-builder/src/lib/hmcts-form-builder.module';

@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HmctsFormBuilderModule
  ],
  providers: [
  ]
})
export class SharedModule {
}
