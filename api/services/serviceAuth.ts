import * as express from 'express'
import * as otp from 'otp'
import config from '../lib/config'
import { http } from '../lib/http'
import { getHealth, getInfo } from '../lib/util'
import { AxiosResponse } from 'axios';

const url = config.s2s
const microservice = config.microservice
const s2sSecret = process.env.S2S_SECRET || 'AAAAAAAAAAAAAAAA'

export async function postS2SLease() {

    const configEnv = process ? process.env.JUI_ENV || 'local' : 'local'
    let request: AxiosResponse<any>

    if (configEnv !== 'local') {

        const oneTimePassword = otp({ secret: s2sSecret }).totp()

        request = await http.post(`${url}/lease`, {
            microservice,
            oneTimePassword,
        })
    } else {
        // this is only for local development against the RD docker image
        request = await http.get(url)
    }

    return request.data
}


export default app => {
    const router = express.Router({ mergeParams: true })
    app.use('/s2s', router)

    router.get('/health', (req, res, next) => {
        res.status(200).send(getHealth(url))
    })

    router.get('/info', (req, res, next) => {
        res.status(200).send(getInfo(url))
    })
}
