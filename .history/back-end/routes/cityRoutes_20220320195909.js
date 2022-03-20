
import { Router } from 'express';
import { currentUser } from '../controller/user.js';

const userRouter = Router();

userRouter.get('/', currentUser);

export default userRouter;