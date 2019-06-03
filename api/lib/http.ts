import axios, { AxiosInstance } from 'axios'
import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors'

export const http: AxiosInstance = axios.create({})

axios.defaults.headers.common['Content-Type'] = 'application/json'

/**
 * The token value is hardcoded for testing purposes
 *
 * TODO: Integrate the token functionality with IDAM.
 *
 */
axios.defaults.headers['ServiceAuthorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyZF9wcm9mZXNzaW9uYWxfYXBpIiwiZXhwIjoxNTU5NTg5NDM0fQ.0mSOCtgBITMq4-gCX9Y0QEqXuYDH08fDXQPiMYioN8CAJmWWKTAVKmYlcW88dhWo_BE-unmaUisb_sCMQlaWbQ'

http.interceptors.request.use(requestInterceptor)
http.interceptors.response.use(successInterceptor, errorInterceptor)
