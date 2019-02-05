import * as express from 'express'

import { process } from '../lib/stateEngine'
import { Store } from '../lib/store'

import * as log4js from 'log4js'
import config from '../lib/config'
import {asyncReturnOrError} from '../lib/util'
import * as rdProfessional from '../services/rd-professional'
import mapping from './mapping'
import templates from './templates'

const logger = log4js.getLogger('server')
logger.level = config.logging ? config.logging : 'OFF'

const ERROR400 = 400

async function registerOrganisation(req, res) {

  const payloadData = req.body

  logger.info('Payload assembled')
  logger.info(JSON.stringify(payloadData))

  return await asyncReturnOrError(
    rdProfessional.postOrganisation(payloadData),
    'Error registering organisation',
    res,
    logger,
    false
  )

}

async function payload(req, res) {

  logger.info('Posting to Reference Data (Professional) service')
  const result = await registerOrganisation(req, res)

  logger.info('Posted to Reference Data (Professional) service', result)

  if (result) {
    return 'registration-confirmation'
  }

  res.status(ERROR400).send('Error registering organisation')
  return null
}

async function handleStateRoute(req, res) {
    console.log('reached')
    process(req, res, mapping, payload, templates, new Store(req))
}

export  const router = express.Router({ mergeParams: true })

router.get('/states/:jurId/:caseTypeId/:caseId/:stateId', handleStateRoute)
router.post('/states/:jurId/:caseTypeId/:caseId/:stateId', handleStateRoute)

export default router
