export interface PostOrgansiationPayload {
    name: string,
    url?: string,
    superUser: {
        firstName: string,
        lastName: string,
        email: string,
    }
    pbaAccounts: [
        {
            pbaNumber: string,
        },
        {
            pbaNumber: string,
        }
        ],
    dxAddress?: {
        dxExchange: string,
        dxNumber: string,
    },
    address: {
        /**
         * TODO: houseNoBuildingName should be optional on the api layer, currently it is
         * required. Hence it is not optional here.
         */
        houseNoBuildingName: string,
        addressLine1: string,
        addressLine2?: string,
        townCity: string,
        county: string,
        postcode: string,
    }
}
