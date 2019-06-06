export default {
  appInsightsInstrumentationKey: process.env.APPINSIGHTS_INSTRUMENTATIONKEY || "AAAAAAAAAAAAAAAA",
  logging: 'debug',
  maxLogLine: 80,
  microservice: 'jui_webapp',
  proxy: {
    host: '172.16.0.7',
    port: 8080,
  },
  secureCookie: false,
  sessionSecret: 'secretSauce',

}
