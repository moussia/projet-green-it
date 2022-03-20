
import { Router } from 'express';
import { search } from '../controller/search';

const searchRouter = Router();

searchRouter.get('/', Search);

export default searchRouter;