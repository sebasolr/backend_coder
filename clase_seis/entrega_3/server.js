const express = require('express');
const fs = require('fs');
const producto = require('./add');

function random(max) { return Math.floor(Math.random() * max)}

const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.redirect('/productos')
})
app.get('/productos', async (req, res) => {
    const contenido = await producto.getAll();
res.json(contenido)
})
app.get('/productosrandom', async(req, res) => {
    const contenido = await producto.getAll();
    const num = random(contenido.length)
res.send(contenido[num])
})
app.get('*', (req, res) => {
    res.redirect('/productos')
})

app.listen(PORT,() => {
console.log(`El servidor se encuentra en linea http://localhost:${PORT}`);
})