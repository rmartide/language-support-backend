const express = require('express')
const app = express()
const { mongoose } = require('./database/driver');

require('dotenv').config();

const PORT = process.env.PORT;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'we sad boiii'));
db.once('open', () => console.log('We in with mongoose boii'));

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`We listening to port ${PORT} boiii!`))