export default {
  appInsightsInstrumentationKey: process.env.APPINSIGHTS_INSTRUMENTATIONKEY || "AAAAAAAAAAAAAAAA",
  logging: 'debug',
  maxLogLine: 80,
  microservice: 'jui_webapp',
  proxy: {
    host: '172.16.0.7',
    port: 8080,
  },
  s2s: 'http://127.0.0.1:8089/token',
  secureCookie: false,
  services: {
    rdProfessionalApi: 'https://rpa-rd-professional-aat.service.core-compute-aat.internal',
  },
  sessionSecret: 'secretSauce',

}
