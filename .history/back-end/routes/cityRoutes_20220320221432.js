
import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', Search);

export default userRouter;