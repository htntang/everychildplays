import express from 'express';
import { createPlayground, getAllPlaygrounds, getPlaygroundById, updatePlaygroundById, deletePlaygroundById } from '../controllers/playgrounds';

const router = express.Router();

playgroundRouter.post('/create', createPlayground);
playgroundRouter.get('/', getAllPlaygrounds);
playgroundRouter.get('/:id', getPlaygroundById);
playgroundRouter.patch('/:id', updatePlaygroundById);
playgroundRouter.delete('/:id', deletePlaygroundById);


export default playgroundRouter;
