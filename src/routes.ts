import { Router } from 'express'
import AuthController from './controllers/AuthController'
import EntityController from './controllers/EntityController'

const routes = Router()


AuthController.setRoutes(routes)
EntityController.setRoutes(routes)

export default routes