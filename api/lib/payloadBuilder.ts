/**
 * makeOrganisationPayload
 *
 *
 * TODO: Note that if we add the dxAddress in, we get a 500 status error.
 * Fix required on the api.
 *
 * PBA number 1 should be called PBA number 2 on UI.
 *
 * @param stateValues
 * @return
 */
exports.makeOrganisationPayload = stateValues => {
    return {
        name: stateValues.orgName,
        superUser: {
            firstName: stateValues.firstName,
            lastName: stateValues.lastName,
            email: stateValues.emailAddress,
        },
        pbaAccounts: [
            {
                pbaNumber: stateValues.PBAnumber1,
            },
            {
                pbaNumber: stateValues.PBAnumber2,
            },
        ]
        // dxAddress: {
        //     dxExchange: stateValues.DXexchange,
        //     dxNumber: stateValues.DXnumber,
        // },
    }
}
