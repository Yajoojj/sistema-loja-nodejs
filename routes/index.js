const express = require('express');
const router = express.Router();

// Dados simulados
const invocadores = [
    { nome: 'Mordercarlos', nivel: 432, regiao: 'BR' },
    { nome: 'Jisatsu', nivel: 235, regiao: 'BR' },
    { nome: 'Yajoojj', nivel: 543, regiao: 'BR' },
    { nome: 'Hawk', nivel: 12, regiao: 'BR' },
    { nome: 'Fimous', nivel: 234, regiao: 'BR' }
];

const produtos = [
    { nome: 'Skin: Mordekaiser Estrela Negra', preco: 25.00, categoria: 'Skin de Campeão' },
    { nome: 'Pacote de Ícones', preco: 10.00, categoria: 'Personalização' },
    { nome: 'Pacote de Emotes', preco: 7.50, categoria: 'Comunicação' },
    { nome: 'Skin: Jax Pescador', preco: 30.00, categoria: 'Skin de Campeão' },
    { nome: 'Pacote de SFX', preco: 5.00, categoria: 'Efeitos Sonoros' }
];

const pedidos = [
    { numero: 'L001', valor: 25.00 },
    { numero: 'L002', valor: 17.50 },
    { numero: 'L003', valor: 30.00 },
    { numero: 'L004', valor: 10.00 },
    { numero: 'L005', valor: 5.00 }
];

// Rotas principais
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/invocadores', (req, res) => {
    res.render('clientes', { clientes: invocadores });
});

router.get('/produtos', (req, res) => {
    res.render('produtos', { produtos });
});

router.get('/pedidos', (req, res) => {
    res.render('pedidos', { pedidos });
});

module.exports = router;
