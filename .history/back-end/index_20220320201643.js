import 'dotenv/config';
import express from 'express';
import cityRoutes from './routes/cityRoutes.js';
import './conf/database.js';
import cors from 'cors';
import city from './model/city.js';

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

app.get('/parsing', (req, res) => {

    const city = new city({

    });
    res.send();
});
// app.use('/search', cityRoutes);

app.listen(process.env.PORT, () => {
    console.log(`✅ App listening on port ${process.env.PORT}`)
})