'use strict';

const express = require('express');

// Constants
const PORT = 3001;
const HOST = '127.0.0.1';
const app = express();
var cors = require('cors')
app.use(cors())

app.use(express.static(__dirname)); //here is important thing - no static directory, because all static :)

const { MongoClient } = require('mongodb');
const connection = "mongodb://localhost:27017";
const client = new MongoClient(connection);


app.get('/city', async (req, res) => {
  const co = client.connect();
  const db = client.db("green-it");
  const testCollection = db.collection("data");
  const indexResult = testCollection.createIndex({ Libcom: 'text' })
  const query = { $text: { $: req.query.q } };
  const projection = {
    Libcom: 1,
    Libreg: 1, Libdep: 1,
    "SCORE GLOBAL departement 1": 1,
    "SCORE GLOBAL region 1": 1,
    "ACCÈS AUX INTERFACES NUMERIQUES": 1,
    "ACCES A L'INFORMATION": 1,
    "COMPETENCES ADMINISTATIVES": 1,
    "COMPÉTENCES NUMÉRIQUES / SCOLAIRES": 1
  };
  const cursor = testCollection.find(query).project(projection);
  const allVal = await cursor.toArray();
  res.send(JSON.stringify(allVal))
})


app.listen(PORT, HOST);
