const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type: {type: String,required:[true,'Campo Obrigatorio'],default: 'Point'},
    coordinates: {type: [Number],required:[true,'Campo Obrigatorio'],index: '2dsphere'}
});

const GeoCoverageSchema = new Schema({
    type: {type: String,required:[true,'Campo Obrigatorio'],default: 'MultiPolygon'},
    coordinates: {type:Array,required:[true,'Campo Obrigatorio']}
});


mongoose.model("CriarParceiro",{
    id:{type:Number, unique:true, require:true},
    tradingName:{type:String, require:true},
    ownerName:{type:String, require:true},
    document:{type:String, unique:true, require:true},
    coverageArea:GeoCoverageSchema,
    address:GeoSchema
});
