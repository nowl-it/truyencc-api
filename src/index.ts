import express, { type Application } from 'express'

import dotenv from 'dotenv'
import cors from 'cors'
import router from '@/routes/router'

import '@/routes'

dotenv.config()

const app: Application = express()
const port = process.env.PORT

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(process.env.PREFIX_API || '/api/v1', router)

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

server.keepAliveTimeout = 120 * 1000
server.headersTimeout = 120 * 1000
