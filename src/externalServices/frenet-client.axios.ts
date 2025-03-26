import axios, { InternalAxiosRequestConfig } from 'axios'

const frenetClient = axios.create({
  baseURL: process.env.FRENET_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

frenetClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {   
  config.headers['token'] =  process.env.FRENET_TOKEN
  return config
})

export { frenetClient };
