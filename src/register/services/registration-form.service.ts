import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable, of} from 'rxjs';


const dummy = {
  "formValues": {
    "approveDraftConsent": "no",
    "visitedPages": {
      "create": true
    },
    "notesForAdmin": ""
  },
  "meta": {
    "idPrefix": "reject-reasons",
    "name": "reject-reasons",
    "formGroupValidators": [
      {
        "validatorFunc": "isAnyCheckboxChecked",
        "validationErrorId": "reasonsConstentOrderNotApproved",
        "controls": [
          "partiesNeedAttend",
          "NotEnoughInformation",
          "orderNotAppearOfS25ca1973",
          "d81",
          "pensionAnnex",
          "applicantTakenAdvice",
          "respondentTakenAdvice",
          "Other2"
        ]
      },
      {
        "validatorFunc": "isTextAreaValidWhenCheckboxChecked",
        "validationErrorId": "informationNeeded",
        "controls": {
          "checkboxControl": "Other",
          "textareaControl": "informationNeeded"
        }
      },
      {
        "validatorFunc": "isTextAreaValidWhenCheckboxChecked",
        "validationErrorId": "Reason",
        "controls": {
          "checkboxControl": "Other2",
          "textareaControl": "Reason"
        }
      }
    ],
    "validationHeaderErrorMessages": [
      {
        "validationLevel": "formControl",
        "controlId": "informationNeeded",
        "text": "Enter what information is needed",
        "href": "#"
      },
      {
        "validationLevel": "formControl",
        "controlId": "includeAnnotatedVersionDraftConsOrder",
        "text": "Select yes if you want to include an annotated version of the draft consent order",
        "href": "#"
      },
      {
        "validationLevel": "formControl",
        "controlId": "Directions",
        "text": "Enter the directions",
        "href": "#"
      },
      {
        "validationLevel": "formGroup",
        "formGroupValidationErrorId": "reasonsConstentOrderNotApproved",
        "text": "Select reasons the consent order was not approved",
        "href": "#"
      },
      {
        "validationLevel": "formGroup",
        "formGroupValidationErrorId": "informationNeeded",
        "text": "Enter additional information",
        "href": "#"
      },
      {
        "validationLevel": "formGroup",
        "formGroupValidationErrorId": "Reason",
        "text": "Enter the reason",
        "href": "#"
      }
    ],
    "header": "What should appear in the directions order?",
    "groups": [
      {
        "fieldset": [
          {
            "legend": {
              "text": "Reasons the consent order was not approved",
              "isPageHeading": true,
              "classes": "govuk-fieldset__legend--m"
            }
          },
          {
            "hint": {
              "text": "Select all that applys.",
              "classes": "govuk-hint"
            }
          },
          {
            "validationError": {
              "value": "Select reasons the consent order was not approved",
              "identifier": "reasonsConstentOrderNotApproved"
            }
          },
          {
            "checkbox": {
              "control": "partiesNeedAttend",
              "value": false,
              "text": "The parties need to attend a hearing",
              "validators": [
                {
                  "validator": "required"
                },
                {
                  "validator": "custom",
                  "customValidator": "oneOfGroupIsSelected"
                }
              ]
            }
          },
          {
            "checkbox": {
              "control": "NotEnoughInformation",
              "value": false,
              "text": "Not enough information was supplied to decide if the order is fair",
              "groups": [
                {
                  "fieldset": [
                    {
                      "legend": {
                        "text": "Information required",
                        "isPageHeading": false,
                        "classes": "govuk-fieldset__legend--m"
                      }
                    },
                    {
                      "checkbox": {
                        "control": "capitalPositions",
                        "value": false,
                        "text": "The parties’ capital positions if the order were to take effect"
                      }
                    },
                    {
                      "checkbox": {
                        "control": "partiesHousingNeeds",
                        "value": false,
                        "text": "The parties’ housing needs and whether they are met by the order"
                      }
                    },
                    {
                      "checkbox": {
                        "control": "justificationDeparture",
                        "value": false,
                        "text": "The justification for departure from equality of capital"
                      }
                    },
                    {
                      "checkbox": {
                        "control": "partiesPensionProvision",
                        "value": false,
                        "text": "The parties’ pension provision if the order were to take effect"
                      }
                    },
                    {
                      "checkbox": {
                        "control": "childrensHousingNeeds",
                        "value": false,
                        "text": "The children’s housing needs and whether they are met by the order"
                      }
                    },
                    {
                      "checkbox": {
                        "control": "netEffectOrder",
                        "value": false,
                        "text": "The net effect of the order"
                      }
                    },
                    {
                      "checkbox": {
                        "control": "Other",
                        "value": false,
                        "text": "Other",
                        "groups": [
                          {
                            "validationError": {
                              "value": "Enter additional information",
                              "identifier": "informationNeeded"
                            }
                          },
                          {
                            "textarea": {
                              "label": {
                                "text": "What information is needed?",
                                "classes": "govuk-label--m"
                              },
                              "control": "informationNeeded",
                              "value": ""
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              ]
            }
          },
          {
            "checkbox": {
              "control": "orderNotAppearOfS25ca1973",
              "value": false,
              "text": "The order doesn’t appear fair taking account of S25 Matrimonial Causes Act 1973"
            }
          },
          {
            "checkbox": {
              "control": "d81",
              "value": false,
              "text": "The D81 form is incomplete"
            }
          },
          {
            "checkbox": {
              "control": "pensionAnnex",
              "value": false,
              "text": "The pension annex was not attached"
            }
          },
          {
            "checkbox": {
              "control": "applicantTakenAdvice",
              "value": false,
              "text": "It’s not clear if the applicant has taken independent legal advice"
            }
          },
          {
            "checkbox": {
              "control": "respondentTakenAdvice",
              "value": false,
              "text": "It’s not clear if the respondent has taken independent legal advice"
            }
          },
          {
            "checkbox": {
              "control": "Other2",
              "value": false,
              "text": "Other",
              "groups": [
                {
                  "validationError": {
                    "value": "Enter the reason",
                    "identifier": "Reason"
                  }
                },
                {
                  "textarea": {
                    "label": {
                      "text": "Reason",
                      "classes": "govuk-label--m"
                    },
                    "control": "Reason",
                    "value": ""
                  }
                }
              ]
            }
          }
        ]
      },
      {
        "textarea": {
          "label": {
            "text": "Directions",
            "classes": "govuk-label--m"
          },
          "validationError": {
            "value": "Enter the directions that are required",
            "controlId": "Directions"
          },
          "control": "Directions",
          "value": "",
          "validators": [
            "required"
          ]
        }
      },
      {
        "fieldset": [
          {
            "legend": {
              "text": "Do you want to include an annotated version of the draft consent order?",
              "isPageHeading": true,
              "classes": "govuk-fieldset__legend--m"
            }
          },
          {
            "hint": {
              "text": "You can use this to illustrate any detailed points or feedback for the parties.",
              "classes": "govuk-hint"
            }
          },
          {
            "radios": {
              "control": "includeAnnotatedVersionDraftConsOrder",
              "classes": "govuk-radios--inline",
              "validationError": {
                "value": "Select yes if you want to include an annotated version of the draft consent order",
                "controlId": "includeAnnotatedVersionDraftConsOrder"
              },
              "radioGroup": [
                {
                  "value": "yes",
                  "text": "Yes",
                  "hiddenAccessibilityText": ", send an annotated version of the draft consent order to the parties"
                },
                {
                  "value": "no",
                  "text": "No",
                  "hiddenAccessibilityText": ", I don’t want to send an annotated version of the draft consent order to the parties"
                }
              ],
              "validators": [
                "required"
              ]
            }
          }
        ]
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
  },
  "newRoute": null
}


@Injectable()
export class RegistrationFormService {
  constructor(private http: HttpClient) {}

  getRetistrationFrom(pageId): Observable<any> {

    return of(dummy)
    // return this.http
    //   .get<any>(`/api/pizzas`)
    //   .pipe(catchError((error: any) => throwError(error.json())));
  }


}
