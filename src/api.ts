import express, { type Application } from 'express'

import dotenv from 'dotenv'
import cors from 'cors'
import router from '@/routes/router'

import '@/routes'

dotenv.config()

const app: Application = express()

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use(process.env.PREFIX_API || '/api/v1', router)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})
