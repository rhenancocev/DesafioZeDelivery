const express = require ('express');
const router = express.Router();
const buscaParceiro = require ('../controllers/buscaParceiroController');

router.get('/buscaParceiro', buscaParceiro.buscaParceiro);

module.exports = router;