import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './containers/app/app.component';
import {HeaderComponent} from './containers/header/header.component';
import {HmctsGlobalHeaderComponent} from './components/hmcts-global-header/hmcts-global-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HmctsGlobalHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
