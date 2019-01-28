import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


const formObj = {
  'organisation-name': {
    'formValues': {
      'approveDraftConsent': 'no',
        'visitedPages': {
        'create': true
      },
      'notesForAdmin': ''
    },
    'meta': {
      'idPrefix': 'tbc',
        'name': 'organisation-name',
        'header': 'What\'s the name of your organisation?',
        'formGroupValidators': [],
        'validationHeaderErrorMessages': [
          // {
          //   validationLevel: 'formControl',
          //   controlId: 'orgName',
          //   text: 'Enter organisation name',
          //   href: '/register/organisation-name'
          // },
          // {
          //   validationLevel: 'formControl',
          //   controlId: 'officeAddressOne',
          //   text: 'Enter office address',
          //   href: '/register/organisation-address'
          // },
          // {
          //   validationLevel: 'formControl',
          //   controlId: 'emailAddress',
          //   text: 'Enter office address',
          //   href: '/register/organisation-address'
          // }
        ],
        'groups': [
          {
            input: {
              label: {
                text: '',
                classes: 'govuk-label--m'
              },
              validators: ['required'],
              control: 'orgName',
              classes: ''
            },
          },
          {
            hiddenInput: {
              control: 'nextUrl',
              value: 'organisation-address'
            }
          },
          {
            'button': {
              'control': 'createButton',
              'value': 'Continue',
              'type': 'submit',
              'classes': '',
              'onEvent': 'continue'
            }
          }
      ]
    }
  },

  'organisation-address': {
    'formValues': {
      'approveDraftConsent': 'no',
      'visitedPages': {
        'create': true
      },
      'notesForAdmin': ''
    },
    'meta': {
      'idPrefix': 'tbc',
      'name': 'organisation-name',
      'header': 'What\'s the address of your main office?',
      'formGroupValidators': [],
      groups: [
        {
          input: {
            label: {
              text: 'Building and street',
              classes: 'govuk-label--m'
            },
            validators: ['required'],
            validationError: {
              value: 'Enter the length of hearing in minutes, for example "20"',
              controlId: 'officeAddressOne'
            },
            control: 'officeAddressOne',
            classes: ''
          }
        },
        {
          input: {
            // validators: ['required'],
            validationError: {
              value: 'Enter the length of hearing in minutes, for example "20"',
              controlId: 'officeAddressTwo'
            },
            control: 'officeAddressTwo',
            classes: ''
          }
        },
        {
          input: {
            label: {
              text: 'Town or city',
              classes: 'govuk-label--m'
            },
            control: 'townOrCity',
            validators: ['required'],
            validationError: {
              value: 'Enter when you’d like the hearing to take place',
              controlId: 'townOrCity'
            },
            classes: 'govuk-!-width-two-thirds'
          }
        },
        {
          input: {
            label: {
              text: 'County',
              classes: 'govuk-label--m'
            },
            control: 'county',
            classes: 'govuk-!-width-two-thirds'
          }
        },
        {
          input: {
            label: {
              text: 'Postcode',
              classes: 'govuk-label--m'
            },
            control: 'postcode',
            validators: ['required'],
            validationError: {
              value: 'Enter when you’d like the hearing to take place',
              controlId: 'Poscode'
            },
            classes: 'govuk-input--width-10'
          }
        },
        {
          hiddenInput: {
            control: 'nextUrl',
            value: 'pba-number'
          }
        },
        {
          button: {
            control: 'createButton',
            value: 'Continue',
            type: 'submit',
            classes: '',
            onEvent: 'continue'
          }
        }
      ]
    }
  },

  'pba-number': {
    'formValues': {
      'approveDraftConsent': 'no',
      'visitedPages': {
        'create': true
      },
      'notesForAdmin': ''
    },
    'meta': {
      'idPrefix': 'tbc',
      'name': 'organisation-name',
      'header': 'What\'s your payment by account (PBA) number for your organisation?',
      'formGroupValidators': [],
      groups: [
        {
          input: {
            label: {
              text: 'PBA number 1 (optional)',
              classes: 'govuk-label--m'
            },
            control: 'PBAnumber1',
            classes: 'govuk-!-width-two-thirds'
          }
        },
        {
          input: {
            label: {
              text: 'PBA number 1 (optional)',
              classes: 'govuk-label--m'
            },
            control: 'PBAnumber2',
            classes: 'govuk-!-width-two-thirds'
          }
        },
        {
          hiddenInput: {
            control: 'nextUrl',
            value: 'DXreference'
          }
        },
        {
          button: {
            control: 'createButton',
            value: 'Continue',
            type: 'submit',
            classes: '',
            onEvent: 'continue'
          }
        }
      ]
    }
  },

  'DXreference': {
    'formValues': {
      'approveDraftConsent': 'no',
      'visitedPages': {
        'create': true
      },
      'notesForAdmin': ''
    },
    'meta': {
      'idPrefix': 'tbc',
      'name': 'organisation-name',
      'header': 'What\'s the DX reference for your main office? (optional)',
      'formGroupValidators': [],
      groups: [
        {
          input: {
            label: {
              text: 'DX number',
              classes: 'govuk-label--m'
            },
            control: 'DXnumber',
            classes: 'govuk-!-width-two-thirds'
          }
        },
        {
          input: {
            label: {
              text: 'DX exchange',
              classes: 'govuk-label--m'
            },
            control: 'DXexchange',
            classes: 'govuk-!-width-two-thirds'
          }
        },
        {
            hiddenInput: {
            control: 'nextUrl',
            value: 'email-address'
          }
        },
        {
          button: {
            control: 'createButton',
            value: 'Continue',
            type: 'submit',
            classes: '',
            onEvent: 'continue'
          }
        }
      ]
    }
  },

  'email-address': {
    'formValues': {
      'approveDraftConsent': 'no',
      'visitedPages': {
        'create': true
      },
      'notesForAdmin': ''
    },
    'meta': {
      'idPrefix': 'tbc',
      'name': 'organisation-name',
      'header': 'What\'s your email address?',
      'formGroupValidators': [],
      groups: [
        {
          input: {
            validators: ['required'],
            validationError: {
              value: 'Enter the length of hearing in minutes, for example "20"',
              controlId: 'emailAddress'
            },
            control: 'emailAddress',
            classes: ''
          }
        },
        {
          hiddenInput: {
            control: 'nextUrl',
            value: 'check'
          }
        },
        {
          'button': {
            'control': 'createButton',
            'value': 'Continue',
            'type': 'submit',
            'classes': '',
            'onEvent': 'continue'
          }
        }
      ]
    }
  },
}

@Injectable()
export class RegistrationFormService {
  constructor() {}

  getRetistrationFrom(pageId): Observable<any> {

    return of(formObj[pageId]);
    // http service goes here
  }


}
