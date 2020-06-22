const express = require ('express');
const router = express.Router();
const consultaParceiro = require ('../controllers/consultaParceiroController');

router.get('/listaId', consultaParceiro.listaParceiroPorId);
router.get('/listaTodos', consultaParceiro.listaTodos);

module.exports = router;