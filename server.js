require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./utils/Config.json');

const crewRouter = require('./routes/crew');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Successfully connected to Argo database'));

app.use(express.json());
app.use(cors({
    origin: config.cors.origins
}));

app.use('/crew', crewRouter);

app.listen(3000, () => console.log('Server started'));