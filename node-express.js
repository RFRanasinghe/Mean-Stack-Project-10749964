const express = require('express');
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient

const http = require('http');
const { Server } = require("socket.io");
const io = new Server(server);

const app = express()
app.use(cors())
app.use(express.json())

var database

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//retrieving localBroker Details
app.get('/api/localBroker', (req, res) => {
  database.collection('localBrokerTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on local business-North Province Sogo Table-Mega market
app.get('/api/localMarket/NorthProvince/Sogo', (req, res) => {
  database.collection('SogoTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on local business-North Province Happy Jewellery Table-Mega market
app.get('/api/localMarket/NorthProvince/HappyJewellery', (req, res) => {
  database.collection('HappyJewelleryTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on local business-Western Province Odel Table-Fashion
app.get('/api/localMarket/WesternProvince/Odel', (req, res) => {
  database.collection('OdelTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on local business-Western Province Aliya Table-Fashion
app.get('/api/localMarket/WesternProvince/Aliya', (req, res) => {
  database.collection('AliyaTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on local business-Western Province Mimosa Table-Fashion
app.get('/api/localMarket/WesternProvince/Mimosa', (req, res) => {
  database.collection('MimosaTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on global business-spa ceylon
app.get('/api/globalMarket/spaCeylon', (req, res) => {
  database.collection('SpaCeylonTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on global business-HermersTable
app.get('/api/globalMarket/Herm', (req, res) => {
  database.collection('HermersTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on global business-Louis Table
app.get('/api/globalMarket/Louis', (req, res) => {
  database.collection('LouisTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on registered profiles- admin
app.get('/api/registerProfiles', (req, res) => {
  database.collection('registerProfileTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})


MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (error, result) => {
    if (error) throw error
    database = result.db('stockMarketDataBase')
  console.log('Database connection established')
  app.listen(8080, () => {
  console.log('listening on 8080')
})
  })
//database connection

