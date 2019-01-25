import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FromBuilderComponent} from '../containers';
import {FormsService} from '../containers/form-builder/services/form-builder.service';
import {ValidationService} from '../containers/form-builder/services/form-builder-validation.service';
import {FieldsetComponent} from '../components/fieldset/fieldset.component';
import {JuiFormElementsComponent} from '../components/jui-form-elements/jui-form-elements.component';
import {LegendComponent} from '../components/legend/legend.component';
import {HintComponent} from '../components/hint/hint.component';
import {ValidationErrorFormGroupComponent} from '../components/validation-error-formgroup/validation-error-formgroup.component';
import {DateComponent} from '../components/date/date.component';
import {InputsComponent} from '../components/inputs/inputs.component';
import {RadiobuttonComponent} from '../components/radiobutton/radiobutton.component';
import {CheckboxComponent} from '../components/checkbox/checkbox.component';
import {TextareasComponent} from '../components/textareas/textareas.component';
import {ButtonsComponent} from '../components/buttons/buttons.component';
import {LabelComponent} from '../components/label/label.component';
import {HiddenInputComponent} from '../components/hidden-input/hidden-input.component';


@NgModule( {
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ValidationErrorFormGroupComponent,
    FromBuilderComponent,
    FieldsetComponent,
    JuiFormElementsComponent,
    LegendComponent,
    HintComponent,
    DateComponent,
    InputsComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareasComponent,
    ButtonsComponent,
    LabelComponent,
    HiddenInputComponent

  ],
  exports: [
    ValidationErrorFormGroupComponent,
    FromBuilderComponent,
    FieldsetComponent,
    JuiFormElementsComponent,
    LegendComponent,
    HintComponent,
    DateComponent,
    InputsComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    TextareasComponent,
    ButtonsComponent,
    LabelComponent,
    HiddenInputComponent
  ],
  providers: [
    FormsService,
    ValidationService,

  ]
} )
export class SharedModule {
}
