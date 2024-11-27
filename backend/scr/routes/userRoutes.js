const express = require('express');
const router = express.Router();

// Criar
router.post('/users', (req, res) => {
    res.send('Usuário criado!');
});

// Ler
router.get('/users', (req, res) => {
    res.send('Listar usuários!');
});

// Atualizar
router.put('/users/:id', (req, res) => {
    res.send(`Usuário ${req.params.id} atualizado!`);
});

// Deletar
router.delete('/users/:id', (req, res) => {
    res.send(`Usuário ${req.params.id} deletado!`);
});

module.exports = router;
