
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import * as session from 'express-session'
import * as globalTunnel from 'global-tunnel-ng'
import * as log4js from 'log4js'
import * as sessionFileStore from 'session-file-store'
import * as envConfig from '../config'
import { appInsights } from './lib/appInsights'
import config from './lib/config'
import { errorStack } from './lib/errorStack'
import serviceTokenMiddleware from './lib/serviceToken'
import routes from './routes'


const FileStore = sessionFileStore(session)

if (config.proxy) {
    globalTunnel.initialize({
        host: config.proxy.host,
        port: config.proxy.port,
    })
}

const app = express()
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

app.use(
    session({
        cookie: {
            httpOnly: true,
            maxAge: 1800000,
            secure: config.secureCookie !== false
        },
        name: "jui-webapp",
        resave: true,
        saveUninitialized: true,
        secret: config.sessionSecret,
        store: new FileStore({
            path: process.env.NOW ? "/tmp/sessions" : ".sessions",
        })
    })
)

app.use(errorStack)
app.use(appInsights)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(serviceTokenMiddleware)


app.use(routes)

const port = process.env.PORT || 3000
app.listen(port)

const logger = log4js.getLogger('server')
logger.level = config.logging ? config.logging : 'OFF'

logger.info(`Started up on ${envConfig.configEnv || 'local'} using ${port}`)
