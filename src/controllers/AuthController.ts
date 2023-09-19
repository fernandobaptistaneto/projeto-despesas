import 'dotenv/config'
import { Request, Response, Router } from "express"
import jwt from 'jsonwebtoken'
import dataSource from '../data-source'
import { User } from '../entities/User'


export class AuthController {

    setRoutes(routes: Router) {
        routes.post('/login', this.login)
        routes.get('/dadosUser', this.dadosUser)
    }

    async login(req: Request, res: Response) {
        const { username, password } = req.body

        try {
            const userRepository = dataSource.getRepository(User)
            if (password === '123') {
                const id = 15
                const token = jwt.sign({ id: id }, String(process.env.SECRET) , { expiresIn: '1d' })
                return res.json({ auth: true, token: token });
            }
            return res.status(500).json({ message: 'Seja Bem Vindo!' })
        } catch (error) {
            return res.status(500).json({ message: 'Error: ', error })
        }
    }

    async dadosUser(req: Request, res: Response) {
        try {
            const dados = [
                { nome: 'Fernando' },
                { nome: 'Débita' },
                { nome: 'João' },
                { nome: 'Leonardo' },
                { nome: 'Ivoneidy' },
            ]
            return res.status(200).json(dados)
        } catch (error) {
            return res.status(500).json({ message: 'Error: ', error })
        }
    }
}

export default new AuthController()