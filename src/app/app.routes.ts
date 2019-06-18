import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/register' },
  { path: '**', redirectTo: '/register' }
];
