import { Router } from "express";
import { GetUsers } from "../../application/use-cases/get-users";
import { UserRepository } from "../../infrastructure/repositories/user-repository";
import { Request, Response } from 'express';

const userRepository = new UserRepository();
const getUsers = new GetUsers(userRepository);

/*
    export const getUsersController = Router();

    getUsersController.get('/', async (req, res) => {
        try {
            const users = await getUsers.execute();
            res.status(200).json(users);
        } catch(error) {
            res.status(500).json({error: 'Internal Server Error'});
        }
    });
*/

export const getUsersController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const users = await getUsers.execute();
        if (users) {
            return res.status(200).json(users);
        }
        return res.status(404).json({ error: 'User not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
