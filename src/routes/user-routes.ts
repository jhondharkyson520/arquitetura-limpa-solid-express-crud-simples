import { Router } from "express";
import { createUserController } from "../interfaces/controllers/create-user-controller";
import { deleteUserController } from "../interfaces/controllers/delete-user-controller";
import { getUsersController } from "../interfaces/controllers/get-users-controller";
import { updateUserController } from "../interfaces/controllers/update-user-controller";

const userRoutes = Router();
userRoutes.use('/create', createUserController);
userRoutes.use('/delete/:id', deleteUserController);
userRoutes.use('/get', getUsersController);
userRoutes.use('/update/:id', updateUserController);

export default userRoutes;
