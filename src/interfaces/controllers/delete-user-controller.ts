import { DeleteUser } from "../../application/use-cases/delete-user";
import { Request, Response } from 'express';
import { PrismaUserRepository } from "../../infrastructure/repositories/prisma-user-repository";

const userRepository = new PrismaUserRepository();
const deleteUser = new DeleteUser(userRepository);

/*      export const deleteUserController = Router();

        deleteUserController.delete('/:id', async (req, res) => {
            try {
                const {id} = req.params;
                const user = await deleteUser.execute(id);
                res.status(200).json(user);
            } catch(error) {
                res.status(500).json({error: 'Internal Server Error'});
            }
        });
*/

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const user = await deleteUser.execute(id);

        if (user) {
            return res.status(200).json({ message: 'User deleted successfully' });
        }
        return res.status(404).json({ error: 'User not found' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
