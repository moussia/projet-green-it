import 'dotenv/config';
import express from 'express';
import cityRoutes from './routes/cityRoutes.js';
import './conf/database.js';
import cors from 'cors';
import { parse } from 'csv-parse';

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
    var csvData=[];
    fs.createReadStream(req.file.path)
        .pipe(parse({delimiter: ':'}))
        .on('data', function(csvrow) {
            console.log(csvrow);
            //do something with csvrow
            csvData.push(csvrow);        
        })
        .on('end',function() {
          //do something with csvData
          console.log(csvData);
        });
    // const newcity = new city({
    // });
    res.send();
});
// app.use('/search', cityRoutes);

app.listen(process.env.PORT, () => {
    console.log(`✅ App listening on port ${process.env.PORT}`)
})