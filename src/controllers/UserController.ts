import { Repository, DataSource } from "typeorm"
import { User } from '../entities/User'
import dataSource from '../data-source'
import { Request, Response } from "express"
import axios from 'axios'


export class UserController {

    async createUser(req: Request, res: Response) {
        const { username, password } = req.body

        try {
            const userRepository = dataSource.getRepository(User)
            const usuario = userRepository.create({ username, password })
            await userRepository.save(usuario)
            return res.status(200).json({ message: 'Cadastrado com sucesso.' })
        } catch (error) {
            return res.status(500).json({ message: 'Algum erro ocorreu: ', error })
        }
    }

    testeCriar() {
        axios.post('http://localhost:3000/userAdd', {
            username: 'Fred',
            password: 'Flintstone'
        })
    }
}

export default new UserController()