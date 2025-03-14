import { CreateUser } from "../../application/use-cases/create-user";
import { PrismaUserRepository } from "../../infrastructure/repositories/prisma-user-repository";
import { Request, Response } from 'express';

const userRepository = new PrismaUserRepository();
const createUser = new CreateUser(userRepository);
/*
        export const createUserController = Router();

        createUserController.post('/', async (req, res) => {
            try {
                const {name, email} = req.body;
                const user = await createUser.execute(name, email);
                res.status(201).json(user);
            } catch(error) {
                res.status(500).json({error: 'Internal Server Error'});
            }
        });
*/

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    try{
        const {name, email} = req.body;
        const user = await createUser.execute(name, email);
        return res.status(201).json(user);
    } catch(error) {
        console.error(error);
        return res.status(500).json({error: 'Internal Server Error'});
    }
}
