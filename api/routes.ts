import stateRouter from './states'

export default app => {
    app.use('/states', stateRouter)
}