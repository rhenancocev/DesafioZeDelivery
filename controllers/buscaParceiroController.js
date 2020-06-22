const mongoose = require("mongoose");
//carregando modolo Schema
require("../models/CriarParceiro");
const model = mongoose.model("CriarParceiro");

//busca um parceiro dada uma coordenada de lng e lat  
exports.buscaParceiro = (req,res,next)=>{

    let lng = parseFloat(req.query.lng);
    let lat = parseFloat(req.query.lat);
    const maxDist = 100000;

    if(req.query.lng === "" || req.query.lat === ""){
        res.statusCode = 417;
        return res.send({"message":"Parametro de LNG e LAT não pode ser nulo!"});
    }else 
    model.aggregate([{
        '$geoNear': {
            "near":{ 'type': 'Point',
            "coordinates": [parseFloat(lng), parseFloat(lat)]},
            "spherical": true,
            "distanceField": 'dist',
            "$limit": 3,
            "maxDistance": maxDist
        }
    }])

    .then(model => {
       if(model.length == 0){
           res.statusCode = 417;
           return res.send({"message":"Não foi encontrado nenhum parceiro nas proximidades informada!"});
        }else
           res.statusCode = 201;
           res.send(model)
            
    })
    .catch(next);

};