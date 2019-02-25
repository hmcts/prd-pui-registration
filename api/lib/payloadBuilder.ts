import {PostOrgansiationPayload} from "../interfaces/postOrgansiationPayload"

/**
 * makeOrganisationPayload
 *
 * Constructs payload to POST data to the /organisations endpoint.
 *
 * TODO: Note that if we add the dxAddress in, we get a 500 status error.
 * Fix required on the api. Awaiting fix. JIRA ticket raised: PUID-103
 *
 * TODO: Note that is we add the contacts in, we get a 500 status error
 * Fix required on api. Awaiting fix. JIRA ticket raised: PUID-104
 *
 * @param stateValues
 * @return
 */
export function makeOrganisationPayload(stateValues): PostOrgansiationPayload {
    return {
        name: stateValues.orgName,
        pbaAccounts: [
            {
                pbaNumber: stateValues.PBAnumber1,
            },
            {
                pbaNumber: stateValues.PBAnumber2,
            },
        ],
        superUser: {
            email: stateValues.emailAddress,
            firstName: stateValues.firstName,
            lastName: stateValues.lastName,
        },
    }
}
