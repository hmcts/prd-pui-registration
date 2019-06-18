export default {
    logging: 'debug',
    maxLogLine: 1,
    secureCookie: false,
    sessionSecret: 'secretSauce',
    appInsightsInstrumentationKey: process.env.APPINSIGHTS_INSTRUMENTATIONKEY || 'AAAAAAAAAAAAAAAA',
    microservice: 'jui_webapp',
    proxy: {
        host: '172.16.0.7',
        port: 8080,
    },
}
