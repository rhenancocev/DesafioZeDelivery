const mongoose = require("mongoose");
//carregando modolo Schema
require("../models/CriarParceiro");
const model = mongoose.model("CriarParceiro");

exports.cadastrarParceiro = async (req, res, next) => {

    if(!req.body.address.coordinates || !req.body.coverageArea.coordinates || !req.body.id || !req.body.tradingName || !req.body.ownerName || !req.body.document) return res.json({"message":"Todos os campos são obrigatório!"});
    if(isNaN(req.body.id)) return res.json({"message":"O campo ID aceita somente números!"});
    
    try{
        const resultId = await model.findOne({id: req.body.id}, (erro,dados)=>{
            if(erro){
                res.statusCode = 417;
                res.json({"message":"Falha na expectativa",
                        "erro": erro});
            }
                const retorno = dados;
                return retorno;
        });

        const resultDocument = await model.findOne({document: req.body.document}, (erro,dados)=>{
            if(erro){
                res.statusCode = 417;
                res.json({"message":"Falha na expectativa"});
            }
                const retorno = dados;
                return retorno;
        })
        
        if(resultId == null && resultDocument == null && req.body.coverageArea != undefined  && req.body.address != undefined && req.body.id != undefined && req.body.tradingName != undefined && req.body.ownerName != undefined && req.body.document != undefined){
                var json = new model({
                    id: req.body.id, 
                    tradingName: req.body.tradingName, 
                    ownerName: req.body.ownerName, 
                    document: req.body.document,
                    coverageArea: req.body.coverageArea,
                    address: req.body.address
                });
                
                json.save().then(() => {
                    //caso sucesso
                    res.statusCode = 201;
                    res.json({"message":"Dados inseridos com sucesso",
                "dados": json});
            
                }).catch((erro)=>{
                    if(erro){
                        throw erro;
                    }
                    //se acontecer alguma falha
                    res.statusCode = 417;
                    res.send();
                })
            }else{
                res.statusCode = 417;
                res.json({"message":"Request inválido, ID ou DOCUMENT já existente no banco de dados."});
            }
    }catch(err){
        console.log(err);
    }
};
