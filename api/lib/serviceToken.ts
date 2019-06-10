import axios from 'axios'
import * as jwtDecode from 'jwt-decode'
import { postS2SLease } from '../services/serviceAuth'
import config from './config'
import { http } from './http'
import * as log4jui from './log4jui'
import { asyncReturnOrError } from './util'


const logger = log4jui.getLogger('service-token')
const that = this
const _cache = {}
const microservice = config.microservice

export function validateCache() {
    logger.info('validaing s2s cache')
    const currentTime = Math.floor(Date.now() / 1000)
    if (!_cache[microservice]) {
        return false
    }
    return currentTime < _cache[microservice].expiresAt
}

export function getToken() {
    return _cache[microservice]
}

export async function generateToken() {
    logger.info('Getting new s2s token')
    const token = await postS2SLease()

    const tokenData: any = jwtDecode(token)

    _cache[microservice] = {
        expiresAt: tokenData.exp,
        token,
    }

    return token
}

export async function serviceTokenGenerator() {
    if (that.validateCache()) {
        logger.info('Getting cached s2s token')
        const tokenData = getToken()
        return tokenData.token
    } else {
        return await that.generateToken()
    }
}

export default async (req, res, next) => {
    const configEnv = process ? process.env.PUI_ENV || 'local' : 'local'

    const token = await asyncReturnOrError(serviceTokenGenerator(), 'Error getting s2s token', res, logger)
    if (token) {
        logger.info('Adding s2s token to defaults')
        req.headers.ServiceAuthorization = `Bearer ${token}`

        axios.defaults.headers.common.ServiceAuthorization = req.headers.ServiceAuthorization

        next()
    }
}
