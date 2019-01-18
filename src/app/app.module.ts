import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './containers/app/app.component';
import {RegisterModule} from '../register/register.module';
import {SharedModule} from './shared/shared.module';

// from Containers
import * as fromContainers from './containers/';

// from Components
import * as fromComponents from './components';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' }
];

@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    RegisterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
