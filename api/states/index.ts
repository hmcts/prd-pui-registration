import * as express from 'express'

import { process } from '../lib/stateEngine'
import { Store } from '../lib/store'

import mapping from './mapping'
import templates from './templates'

function payload(req, res,store) {
    console.log('payload')
}

async function handleStateRoute(req, res) {
    process(req, res, mapping, templates, payload, new Store(req))
}

export default app => {
    const router = express.Router({ mergeParams: true })

    router.get('/:jurId/:caseTypeId/:caseId/:stateId', handleStateRoute)
    router.post('/:jurId/:caseTypeId/:caseId/:stateId', handleStateRoute)
}
