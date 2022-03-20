import fs from 'fs';
import { parse } from 'csv-parse';
import cityModel from '../model/city.js';

export const parsing = async (req, res) => {
    let csvData = [];
    fs.createReadStream('Tableaud.csv', 'latin1')
        .pipe(parse({ relax_quotes: true, relax_column_count: true, ltrim: true, rtrim: true, delimiter: ';' }))
        .on('data', function (csvrow) {
            csvData.push(csvrow);
        })
        .on('end', function () {
            csvData.forEach((row) => {
                const newcity = new cityModel({
                    commune: row[0],
                    codepostal: row[1],
                    scoreGlobal: row[2],
                    iris: row[3],
                    accesInterfaceNumerique: row[4],
                    accesInformation: row[5],
                    competenceAdministrative: row[6],
                    competenceNumerique: row[7]
                });
                newcity.save();
            })
        });
    res.send();
}
