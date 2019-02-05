export default {
    formValues: {
        approveDraftConsent: 'no',
        visitedPages: {
            create: true,
        },
        notesForAdmin: '',
    },
    meta: {
        idPrefix: 'tbc',
        name: 'organisation-dx',
        header: "What's the DX reference for your main office? (optional)",
        formGroupValidators: [],
        groups: [
            {
                hiddenInput: {
                    control: 'nextUrl',
                    value: 'name',
                },
            },
            {
                input: {
                    label: {
                        text: 'DX number',
                        classes: 'govuk-label--m',
                    },
                    control: 'DXnumber',
                    classes: 'govuk-!-width-two-thirds',
                },
            },
            {
                input: {
                    label: {
                        text: 'DX exchange',
                        classes: 'govuk-label--m',
                    },
                    control: 'DXexchange',
                    classes: 'govuk-!-width-two-thirds',
                },
            },
            {
                hiddenInput: {
                    control: 'nextUrl',
                    value: 'name',
                },
            },
            {
                button: {
                    control: 'createButton',
                    value: 'Continue',
                    type: 'submit',
                    classes: '',
                    onEvent: 'continue',
                },
            },
        ],
    },
}
