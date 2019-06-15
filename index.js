//BLOOMTIME DESIGN 2019

//In order to use express server to handle payments on local host use POWERSHELL to direct to the back-end folder and use node index.js

const express = require('express'); //start express back-end server

const SERVER_CONFIGS = require('./src//PaymentStripe/backend/constants/server');

const configureServer = require('./src/PaymentStripe/backend/server');
const configureRoutes = require('./src/PaymentStripe/backend/routes');

const app = express();
configureServer(app);
configureRoutes(app);


app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});