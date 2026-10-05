// connect.js
/* Load environment variables from a .env 
file using the dotenv package*/
require('dotenv').config();
//IMPORT REQUIRED MODULES AND PACKAGES
const mongoose = require('mongoose');

// Extract the database URL and name from environment variables
const uri = process.env.DATABASE_URL;
const database = process.env.DATABASE_NAME;

//==========CHECK FOR REQUIRED ENVIRONMENT VARIABLES=========
// Conditional rendering to check if the database URL and name are defined
if (!uri || !database) {
    console.error('[ERROR: connectDB.js] Database URL or name is not defined in the environment variables.');
    process.exit(1);
}

//=========CONNECT TO MONGODB DATABASE=========
mongoose.Promise = global.Promise; // Use native promises

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            dbName: database,
            serveSelectionTimeoutMS: 5000,
            connectTimeoutMS: 10000,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }       
};

//==========HANDLE CONNECTION EVENTS=========
// Fired when the connection is established
mongoose.connection.on('connected', () => {
    console.log('MongoDB connection established');
});
// Fired when the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB connection disconnected');
});

// Fired when an error occurs in the connection
mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
});

// Fired once when the connection is fully opened
mongoose.connection.once('open', async () => {
    console.log("[SUCCESS: connectDB.JS] Database connection established");//Log a message in the console if the connection is successful
});

//========EXPORT THE CONNECTDB FUNCTION=========
module.exports = connectDB;// Export the connectDB function for use in other parts of the application