
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', currentUser);

export default userRouter;