import 'dotenv/config';
import express from 'express';
import cityRoutes from './routes/cityRoutes.js';
import './conf/database.js';
import cors from 'cors';
import fs from 'fs';
import { parse } from 'csv-parse';
import csv from 'csvtojson'; // Make sure you have this line in order to call functions from this modules


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
    let csvData = [];
    fs.readFile('Tableau.csv')
        .pipe(parse({ column: true, escape: '\\', relax_quotes: true, relax_column_count: true, ltrim: true, rtrim: true, delimiter: '\t' }))
        .on('data', function (csvrow) {
            // console.log(csvrow);
            csvData.push(csvrow);
        })
        .on('end', function () {
            console.log(csvData.map((row) => decodeURIComponent(row[0])));
        });
    // const newcity = new city({
    // });
    res.send();
});
// app.use('/search', cityRoutes);

app.listen(process.env.PORT, () => {
    console.log(`✅ App listening on port ${process.env.PORT}`)
})