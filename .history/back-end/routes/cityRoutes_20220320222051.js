
import { Router } from 'express';
import { search } from '../controller/search.js';

const searchRouter = Router();

searchRouter.get('/', search);

export default searchRouter;