const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MerchandiseSchema = new Schema({
    id:{
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true
    },
    name :{
        type : String,
        required : true
    },
    size : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price :{
        type : Number,
        required : true
    },
    types :{
        type : String,
        required : true 
    }
});

module.exports = mongoose.model('Merchandise' ,MerchandiseSchema)