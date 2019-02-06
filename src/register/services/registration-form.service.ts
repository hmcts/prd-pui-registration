import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';
import {formObj} from './form.mock';

export const ENVIRONMENT = {
  registerOrganisation: '/api/decisions/states/any/any/any/check'
}

@Injectable()
export class RegistrationFormService {
  constructor(private http: HttpClient) {}

  getRetistrationFrom(pageId): Observable<any> {
    const url = `/api/decisions/states/any/any/any/${pageId}`;
    // return of(formObj[pageId]).pipe(
    //   delay(1000)
    // );
    return this.http.get(url);
  }
  postRetistrationFrom(data: any): Observable<any> {
    const  postdata = { ...data, event: 'continue' };
    console.log('postdata', postdata );
    return postdata;
    // return this.http.post<any>(`${ENVIRONMENT.registerOrganisation}`, postdata);
  }

}
