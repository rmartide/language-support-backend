const express = require('express')
const app = express()
const { mongoose } = require('./database/driver');

require('dotenv').config();

const PORT = process.env.PORT;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'we sad boiii'));
db.once('open', () => console.log('We in with mongoose boii'));

app.get('/hello', (req, res) => res.send('Hello World!'));

app.use(express.json())
app.listen(8080)

app.post('/save', (req, res) => {
    const { word, image } = req.body;
    console.log(req.body);

    console.log(`Word ${word}, image ${image}`);

    res.json(req.body)
});

app.get('/search', (req, res) => {
   
    const {q} = req.query;

    console.log(`/search query: ${q}`);

    const response = [
        {"word":"word1","translation":"translation1","story":"story1","image":"image1","tags":[],"info":"info","pronunciation":"pronunciation"},
        {"word":"word2","translation":"translation2","story":"story2","image":"image2","tags":[],"info":"info","pronunciation":"pronunciation"},
        {"word":"word3","translation":"translation3","story":"story3","image":"image3","tags":[],"info":"info","pronunciation":"pronunciation"},
    ];


    res.json(response)
});



app.listen(PORT, () => console.log(`We listening to port ${PORT} boiii!`))