const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const bodyParsers = require('body-parser');
const postRoutes = require('./routes/posts.routes');
const app = express();


dotenv.config();

const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URI;

app.use(bodyParsers.json({limit : '30mb',extended : true}));
app.use(bodyParsers.urlencoded({limit : '30mb',extended : true}));
app.use(cors());


app.use('/posts',postRoutes);


const startServer = () => {
    connectDB(MONGODB_URL)
    .then((conn) => {
        console.log('database connected')
        app.listen(PORT,() => {
            console.log(`Server started at PORT :: ${PORT}`)
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

startServer();