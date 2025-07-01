const express = require('express');
const app = express();
const port = 3000;

app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nombre: 'Gariel', email: 'gabriel@mail.com' },
    { id: 2, nombre: 'Ana', email: 'ana@mail.com' }
  ]);
});

app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});