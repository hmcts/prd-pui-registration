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
    }
}