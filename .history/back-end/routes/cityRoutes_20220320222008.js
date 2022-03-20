
import { Router } from 'express';
import { search } from '../controller/search';

const searchRouter = Router();

searchRouter.get('/', search);

export default searchRouter;