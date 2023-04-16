import express from 'express';
import { createUser, getUserById, updateUserById, deleteUserById } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', createUser);
userRouter.get('/:id', getUserById);
userRouter.patch('/:id', updateUserById);
userRouter.delete('/:id', deleteUserById);

export { userRouter }
