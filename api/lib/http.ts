import axios, { AxiosInstance } from 'axios'
import config from './config'

import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors'

export const http: AxiosInstance = axios.create({})

axios.defaults.headers.common['Content-Type'] = 'application/json'

http.interceptors.request.use(requestInterceptor)
http.interceptors.response.use(successInterceptor, errorInterceptor)
