import { Component } from '@angular/core';

import * as fromRoot from '../../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private store: Store<fromRoot.State>) {}

  onGoBack(event) {
    event.preventDefault();
    this.store.dispatch(new fromRoot.Back());
  }
}
