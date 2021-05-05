
//Add express
const express = require('express');

//initialize app variable with express
const app = express();

//single endpoint for testing sends message to browser window
app.get('/', (req, res) => res.send('API Running'));

//add the remote (environment variable) or local port number
const PORT = process.env.PORT || 5000;

//Pass in the port and do a call back
app.listen(PORT, () => console.log('Server Started on port ${PORT}'));