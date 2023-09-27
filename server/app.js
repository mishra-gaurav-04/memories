const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParsers = require('body-parser');
const app = express();


dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URI;

const startServer = () => {
    
}