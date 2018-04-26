//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var HotelSchema = new mongoose.Schema({
  name : {type : String, required : true, unique: true},
  latitude : {type : String, required : true},
  longitude : {type : String, required : true},
  province : {type : String},
  canton : {type : String, required : true},
  district : {type : String, required : true},
  exactDirection : {type : String, required: true},
  servicePhone : {type : String, required : true},
  serviceEmail : {type : String, required : true},
  reservationPhone : {type : String, required : true},
  reservationEmail : {type : String, required : true},
  photo : {type : String, required : true},
  state : {type : String, required : true},
  rating : {type : String, required : true},
  ratingQuant : {type : String, required : true},
});

//nombre del modelo dentro del back end y el HotelSchema es el nombre dentro de mongoose
module.exports = mongoose.model('Hotel', HotelSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural