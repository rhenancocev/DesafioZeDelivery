const mongoose = require("mongoose");
//carregando modolo Schema
require("../models/CriarParceiro");
const model = mongoose.model("CriarParceiro");

//busca por ID 
exports.listaParceiroPorId = (req,res)=>{

    let id = req.query.id;

    if(isNaN(req.query.id) || req.query.id == "") return res.json({"message":"O campo ID aceita somente números e não pode ser nulo!"});

    model.findOne({id: id}, (erro,dados)=>{
        if(erro){
            res.statusCode = 417;
            res.json({"message":"Falha na expectativa"});
        } else if(dados == null){
            res.json({"message":"Não foi encontrado nenhum registro no banco de dados!"});
        }else{
            res.json(dados);
        }  
    })
};

//busca todos da base
exports.listaTodos = (req,res)=>{
    model.find({}, (erro, dados)=>{
        if(erro){
            res.statusCode = 417;
            res.send("Falha na expectativa");
        } else if(dados.length == 0){
            return res.send({"message": "Não possui registros no banco de dados!"});
        }else{
            res.json(dados);
        }  
    })
};