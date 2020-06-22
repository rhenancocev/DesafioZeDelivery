const express = require ('express');
const router = express.Router();
const criarParceiro = require ('../controllers/cadastroParceiroController');

router.post('/criarParceiro', criarParceiro.cadastrarParceiro);

module.exports = router;