
import { Router } from 'express';
import { parsing } from '../controller/parsing.js';

const parsingRouter = Router();

parsingRouter.get('/', parsing);

export default parsingRouter;