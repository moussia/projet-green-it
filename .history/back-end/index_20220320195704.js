import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import userRouter from './routes/user.js';
import authRouter from './routes/auth.js';
import './conf/database.js';
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
        limit: '30mb'
    })
);

app.use(
    cors({
        credentials: true,
        origin: [process.env.URL_FRONT]
    })
);


app.use('/user', userRouter);
app.use('/session', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`✅ App listening on port ${process.env.PORT}`)
})