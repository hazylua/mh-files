const express = require('express')
const cors = require('cors');
const path = require('path')
const PORT = process.env.PORT || 5000

app = express()

app.use(cors())

app.get('/assets/armormap.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/', 'armormap.json'));
});

app.get('/assets/charmmap.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/', 'charmmap.json'));
});

app.get('/assets/decomap.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/', 'decomap.json'));
});

app.get('/assets/skillmap.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/assets/', 'skillmap.json'));
});

app.get('/', (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => console.log(`Listening on ${PORT}.`))