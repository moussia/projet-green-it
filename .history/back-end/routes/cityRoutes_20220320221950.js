
import { Router } from 'express';
import { Search } from '../controller/search';

const searchRouter = Router();

searchRouter.get('/', Search);

export default userRouter;