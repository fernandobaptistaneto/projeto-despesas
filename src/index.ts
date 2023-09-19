import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'

const axios = require('axios')
const jwt = require('jsonwebtoken')
require("dotenv-safe").config()


const app = express()
app.use(express.json())
app.use(routes)



AppDataSource.initialize().then(() => {
    return app.listen(process.env.APP_PORT, () => { console.log(`Servidor rodando na porta ${process.env.APP_PORT}`) })
})
