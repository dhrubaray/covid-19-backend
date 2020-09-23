const dotenv = require('dotenv');
const mongoose = require("mongoose");

dotenv.config();

const CONNECTION_STRING = `mongodb://${process.env.HOST}:${process.env.DB_PORT}/${process.env.COLLECTION_NAME}`;
console.log(CONNECTION_STRING);
module.exports = async(req, res, next) => {
    /*
    mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true })
        .then(() => console.log("successful"))
        .catch(err => console.log(err));
    /*
    mongoose.connection.once('open', function() {
        console.log("MongoDB database connection established successfully");
    });
    */
    try {
        await mongoose.connect(CONNECTION_STRING);
        console.log("Database connection successful");
    } catch (error) {
        console.log(error);
    }

    next();
};