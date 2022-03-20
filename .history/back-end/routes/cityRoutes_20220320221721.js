
import { Router } from 'express';
// import { Search } from '../controller/search';

const userRouter = Router();

userRouter.get('/', Search);

export default userRouter;