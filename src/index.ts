import express from 'express'
import routes from './routes'
import { AppDataSource } from './data-source'

const axios = require('axios');
const app = express()
app.use(express.json())
app.use(routes)

AppDataSource.initialize().then(() => {
    return app.listen(process.env.APP_PORT, () => { console.log(`Servidor rodando na porta ${process.env.APP_PORT}`) })
})
