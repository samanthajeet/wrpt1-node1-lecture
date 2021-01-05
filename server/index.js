const express = require('express');
const app = express();

app.use(express.json())

const bookctrl = require('./bookctrl')
app.get('/books', bookctrl.getAllBooks)
app.get('/books/:id', bookctrl.getBook)


app.listen(5555, () => console.log('bingpot on port 5555'))