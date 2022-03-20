
import { Router } from 'express';
import { Search } from '../controller/search.js';

const userRouter = Router();

userRouter.get('/', Search);

export default userRouter;