const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const produtos = [
    { id: 1, nome: "Teclado Mecânico", preco: 250.00 },
    { id: 2, nome: "Mouse Gamer", preco: 120.00 },
    { id: 3, nome: "Monitor 144Hz", preco: 900.00 }
];

app.get('/', (req, res) => {
    res.send("API do Desafio rodando com sucesso!");
});

app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
