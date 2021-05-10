
//Add express
const express = require('express');

//Add mongo db
const connectDB = require('./config/db');


//initialize app variable with express
const app = express();



//single endpoint for testing sends message to browser window
app.get('/', (req, res) => res.send('API Running'));


//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

//add the remote (environment variable) or local port number
const PORT = process.env.PORT || 5000;

//Pass in the port and do a call back
app.listen(PORT, () => console.log('Server Started on port ${PORT}'));

//Connect database
connectDB();