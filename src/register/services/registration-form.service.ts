import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


const dummy = {
  "formValues": {
    "approveDraftConsent": "no",
    "visitedPages": {
      "create": true
    },
    "notesForAdmin": ""
  },
  "meta": {
    "idPrefix": "tbc",
    "name": "organisation-name",
    "header": "What's the name of your organisation?",
    "formGroupValidators": [],
    "groups": [
      {
        input: {
          label: {
            text: '',
            classes: 'govuk-label--m'
          },
          control: 'orgName',
          classes: ''
        },
        hiddenInput: {
          control: 'nextUrl',
          value: 'next-page-url'
        }
      },

      {
        "button": {
          "control": "createButton",
          "value": "Continue",
          "type": "submit",
          "classes": "",
          "onEvent": "continue"
        }
      }
    ]
  }
}


@Injectable()
export class RegistrationFormService {
  constructor(private http: HttpClient) {}

  getRetistrationFrom(pageId): Observable<any> {

    return of(dummy)
    // return this.http
    //   .get<any>(`/api/${pageId}`)
    //   .pipe(catchError((error: any) => throwError(error.json())));
  }


}
