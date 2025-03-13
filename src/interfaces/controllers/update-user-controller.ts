import { Router } from "express";
import { UpdateUser } from "../../application/use-cases/update-user";
import { UserRepository } from "../../infrastructure/repositories/user-repository";
import { Request, Response } from 'express';

const userRepository = new UserRepository();
const updateUser = new UpdateUser(userRepository);
/*
        export const updateUserController = Router();

        updateUserController.put('/:id', async (req, res) => {
            try {
                const {id} = req.params;
                const {name, email} = req.body;
                const updatedUser = await updateUser.execute(id, name, email);
                res.status(200).json(updatedUser);
            } catch(error) {
                res.status(500).json({error: 'Internal Server Error'});
            }
        });

*/

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {id} = req.params;
        const {name, email} = req.body;
        const user = await updateUser.execute(id, name, email);

        if (user) {
            return res.status(200).json({ message: 'User update successfully' });
        }
        return res.status(404).json({ error: 'User not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
