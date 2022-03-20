
import { Router } from 'express';
import { Search } from '../controller/search';

const searchRouter = Router();

userRouter.get('/', Search);

export default userRouter;