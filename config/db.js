//Bring in the libraries needed
const mongoose = require('mongoose');
const config = require('config');

//get the mongoURI global variable from config package and save into variable called db
const db = config.get('MONGO_URI');

//connect to mongoDB using async await promise arrow function

const connectDB = async () => {
    try { //if try works 
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
          }); 
        console.log('Mongodb Connected...');
    } catch(err){ //if try fails
        console.error(err.message);
        //exit process with failure
        process.exit(1);
    }
}
//allow file export
module.exports = connectDB;