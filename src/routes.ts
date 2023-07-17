import { Router } from 'express'
import UserController from './controllers/UserController'
import EntityController from './controllers/EntityController'

const routes = Router()


routes.post('/addUser', UserController.createUser)
routes.post('/addEntity', EntityController.createEntity)


export default routes