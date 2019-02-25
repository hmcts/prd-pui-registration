import config from '../lib/config'
import { http } from '../lib/http'

const url = config.services.rd_professional_api

export async function postOrganisation(body: any): Promise<any> {
  const response = await http.post(`${url}/organisations`, body)
  return response.data
}
