const express = require ('express');
const router = express.Router();

/* GET home page. */
router.get('', function(req, res, next) {
  res.status(200).send({ 
    title: 'Backend Desafio Ze Delivery',
    version: "0.0.1",
    help: "Rhenan Cocev",
    resourceMethods: {
      "/cadastro/CriarParceiro" : "Chame /cadastro/CriarParceiro para criar um parceiro",
      "/consulta/listaId/?id=PARAM" : "Chame /consulta/listaId/?id=PARAM para listar um determinado parceiro",
      "/consulta/listaTodos" : "Chame /consulta/listaTodos para listar todos os parceiros do banco",
      "/busca/buscaParceiro/?lng=PARAM&lat=PARAM" : "Chame /busca/buscaParceiro/?lng=PARAM&lat=PARAM passando os parametros, para buscar um parceiro nas proximidades, dada lng e lat",
    }
  });
});

module.exports = router;