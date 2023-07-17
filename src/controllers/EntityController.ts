import { Request, Response } from "express";
import  dataSource  from "../data-source";
import { Entitie } from '../entities/Entitie'

export class EntityController {

    async createEntity(req: Request, res: Response) {

        const dados = req.body
        try {
            
            const entityRepository = dataSource.getRepository(Entitie)
            const entitie = entityRepository.create(dados)
            entityRepository.save(entitie)
            return res.status(200).json({message: 'Entidade cadastrado com sucesso.'})

        } catch (error) {
            return res.status(500).json({message: 'Error: ', error})
        }
    }

}

export default new EntityController