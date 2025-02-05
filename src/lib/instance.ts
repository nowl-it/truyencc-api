import axios, { AxiosInstance } from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const instance: AxiosInstance = axios.create({
    baseURL: process.env.WEB_CRAWLER_URL,
    headers: {
        'User-Agent': process.env.USER_AGENT,
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

export default instance
