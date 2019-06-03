export default {
    appInsightsInstrumentationKey :  process.env.APPINSIGHTS_INSTRUMENTATIONKEY || "AAAAAAAAAAAAAAAA",
    logging: 'debug',
    maxLogLine: 80,
 /* proxy commented out to work with new endpoint
   proxy: {
      host: '172.16.0.7',
      port: 8080,
    },

  */
    secureCookie: false,
    services: {
  // api url hardcoded for dev purpose
      rd_professional_api: 'http://localhost:8090/v1',
    },
    sessionSecret: 'secretSauce',
}
