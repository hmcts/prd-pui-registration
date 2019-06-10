import * as express from 'express'
import serviceRouter from './services/serviceAuth'
import stateRouter from './states'

const router = express.Router({ mergeParams: true })

router.use(serviceRouter)
router.use('/api/decisions', stateRouter)

export default router
