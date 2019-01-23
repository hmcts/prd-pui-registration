import { Component } from '@angular/core';

import * as fromRoot from '../../store';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../register/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>) {}

  onGoBack() {
    this.store.dispatch(new fromRoot.Back())
  }
}
