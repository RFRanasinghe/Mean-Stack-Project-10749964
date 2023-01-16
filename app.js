const express = require('express');
//const app = express();


app.use((req, res, next) => {
  res.status(200).json({
    message: 'App is running on localhost:3000'
  })
})

module.exports= app;
