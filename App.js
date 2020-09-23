const express = require('express');
const cors = require('cors');
const router = require('./routes/router');
const connection = require('./middlewares/connection');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// connection();

app.use(cors());
app.use(connection);
app.use('/', router);

app.listen(process.env.HTTP_PORT, function() {
    console.log("Server is running on Port: " + process.env.HTTP_PORT);
});