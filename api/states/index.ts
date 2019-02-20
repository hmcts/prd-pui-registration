import * as express from 'express'
import * as log4jui from '../lib/log4jui'
import {process} from '../lib/stateEngine'
import {Store} from '../lib/store'
import {asyncReturnOrError} from '../lib/util'
import * as rdProfessional from '../services/rd-professional'
import mapping from './mapping'
import templates from './templates'

const logger = log4jui.getLogger('states')
const ERROR400 = 400

/**
 * Note you cannot send exactly the same data twice otherwise the api will throw back a 500.
 *
 * TODO: payload should be mapped to an interface.
 * TODO: conversion of the req.body to payload should happen.
 * TODO: transform the state body into payload.
 *
 * @param req
 * @param res
 * @return {Promise<any>}
 */
async function registerOrganisation(req, res) {

    const payloadData = req.body

    const payloadData = {
        "name": "org inc16",
        "url": "www.org5.inc",
        "domains": [
            {
                "domain": "org8.com",
            },
        ],
        "superUser": {
            "firstName": "Foo16",
            "lastName": "Barton16",
            "email": "foobarton16@org.com",
        },
    }

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

// TODO: On the UI should show an appropiate message to the user if we're unable to submit their
// request
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
    process(req, res, mapping, payload, templates, new Store(req))
}

export const router = express.Router({mergeParams: true})

router.get('/states/:jurId/:caseTypeId/:caseId/:stateId', handleStateRoute)
router.post('/states/:jurId/:caseTypeId/:caseId/:stateId', handleStateRoute)

export default router
