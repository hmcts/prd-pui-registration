import { config } from '../../config'
import * as log4jui from '../lib/log4jui'
import { http } from '../lib/http'

const logger = log4jui.getLogger('rd-professional')

const url = config.services.rd_professional_api

export async function postOrganisation(body: any): Promise<any> {
    logger.info(`Post organisation body`)
    const response = await http.post(`${url}/organisations`, body)
    return response.data
}
