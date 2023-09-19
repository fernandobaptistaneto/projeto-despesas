import { Request, Response, Router } from "express";

export class EntityController {

    setRoutes (routes: Router) {
        routes.get('/dadosFamily', this.dadosUser)
    }
    
    async dadosUser(req: Request, res: Response) {
        try {
            const dados = [
                { nome: 'Fernando Baptista', cargo: 'Pai'},
                { nome: 'Débita', cargo: 'Amor'},
                { nome: 'João', cargo: 'Filho'},
                { nome: 'Leonardo', cargo: 'Filho'},
                { nome: 'Ivoneidy', cargo: 'Mãe'},
            ]
            return res.status(200).json(dados)
        } catch (error) {
            return res.status(500).json({ message: 'Error: ' , error})
        }
    }

}

export default new EntityController