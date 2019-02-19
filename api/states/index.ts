import * as express from 'express'
import * as log4jui from '../lib/log4jui'
import { process } from '../lib/stateEngine'
import { Store } from '../lib/store'
import { asyncReturnOrError} from '../lib/util'
import * as rdProfessional from '../services/rd-professional'
import mapping from './mapping'
import templates from './templates'

const logger = log4jui.getLogger('states')
const ERROR400 = 400

async function registerOrganisation(req, res) {

    const payloadData = req.body

    logger.info('Payload assembled')
    logger.info(JSON.stringify(payloadData))

    return await rdProfessional.postOrganisation(payloadData)
    // return await rdProfessional.getOrganisations(payloadData)
    //
    // try {
    //     const postOrganisationResponse = rdProfessional.postOrganisation(payloadData)
    //     console.log(postOrganisationResponse)
    // } catch (error) {
    //     console.log('error')
    //     console.log(error)
    // }

    // Ok let's see the issue
    // return await asyncReturnOrError(
    //   rdProfessional.postOrganisation(payloadData),
    //   'Error registering organisation',
    //   res,
    //   logger,
    //   true
    // )
  }

async function payload(req, res) {

    logger.info('Posting to Reference Data (Professional) service')
    // const result = await registerOrganisation(req, res)

    registerOrganisation(req, res).then(response => {
        console.log('response')
        console.log(response)
    }).catch( error => {
        console.log('error')
        console.log(error)
    })

    // console.log('result 2')
    // console.log(result)
    //
    // logger.info('Posted to Reference Data (Professional) service', result)
    //
    // if (result) {
    //   return 'registration-confirmation'
    // }
    //
    // res.status(ERROR400).send('Error registering organisation')
    return null
  }

async function handleStateRoute(req, res) {
    process(req, res, mapping, payload, templates, new Store(req))
}

export const router = express.Router({ mergeParams: true })

router.get('/states/:jurId/:caseTypeId/:caseId/:stateId', handleStateRoute)
router.post('/states/:jurId/:caseTypeId/:caseId/:stateId', handleStateRoute)

export default router
