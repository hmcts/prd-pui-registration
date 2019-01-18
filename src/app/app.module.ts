import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import {HeaderComponent} from './containers/header/header.component';
import {HmctsGlobalHeaderComponent} from './components/hmcts-global-header/hmcts-global-header.component';

import {RegisterModule} from '../register/register.module';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HmctsGlobalHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    RegisterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
