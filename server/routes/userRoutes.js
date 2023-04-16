import express from 'express';
import { createUser, getUserByUsername, updateUserByUsername, deleteUserByUsername } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/register', createUser);
userRouter.get('/:username', getUserByUsername);
userRouter.patch('/:username', updateUserByUsername);
userRouter.delete('/:username', deleteUserByUsername);

export { userRouter }
