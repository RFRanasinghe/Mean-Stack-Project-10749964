const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;

const app = express();
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

//data retrieving on local business-Central Province Mukuwa Table
app.get('/api/localMarket/CentralProvince/mukuwa', (req, res) => {
  database.collection('mukuwaTechTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on local business-Central Province NTC Table
app.get('/api/localMarket/CentralProvince/engineer', (req, res) => {
  database.collection('NTCEngTable').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on local business-Central Province Ulankulama Table
app.get('/api/localMarket/NorthCentralProvince/ulankulama', (req, res) => {
  database.collection('ulankulumaDairy').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on local business-North Central Province TechScroll Table
app.get('/api/localMarket/NorthCentralProvince/techScroll', (req, res) => {
  database.collection('TechScroll').find({}).toArray((err, result) => {
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

//data retrieving on local business-Eastern Province OmegaShipping Table
app.get('/api/localMarket/EasternProvince/omega', (req, res) => {
  database.collection('OmegaShipping').find({}).toArray((err, result) => {
    if (err) throw err
    res.send(result)
  })
})

//data retrieving on local business-Eastern Province KWorldSoftware Table
app.get('/api/localMarket/EasternProvince/kworld', (req, res) => {
  database.collection('KWorldSoftware').find({}).toArray((err, result) => {
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

//database connection
MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (error, result) => {
  if (error) throw error
  database = result.db('stockMarketDataBase')
  console.log('Database connection established')
  app.listen(8080, () => {
    console.log('listening on 8080')
  })
});

app.get('/', (req, res) => {
  res.send("Hello port 3000")
})

//socket connection
const server = http.Server(app);
server.listen(3000);

var io = socketIo(server); //socket setup capture the instance pass through the server

//listen for new connection and print a message in console
io.on('connection', (socketIo) => {
  console.log(`New Connection ${socketIo.id}`);
})
