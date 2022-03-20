
import { Router } from 'express';
import { currentUser } from '../controller/user.js';
import { isAuthenticated } from '../middleware/isAuthenticated.js';

const userRouter = Router();

userRouter.get('/', currentUser);

export default userRouter;