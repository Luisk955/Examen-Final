//Requerimos mongoose
const mongoose = require('mongoose');

//Esquema de usuarios
var UserSchema = new mongoose.Schema({
  idNumber : {type : String, required : true},
  name1 : {type : String, required : true},
  name2 : {type : String, required : true},
  lastName1 : {type : String},
  lastName2 : {type : String, required : true},
  email : {type : String, required : true, unique: true},
  birthDate : {type : Date, required: true},
  phone : {type : String, required : true, unique: true},
  password : {type : String, required : true},
  type : {type : String, required : true},
  state : {type : String, required : true},
});

//nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
module.exports = mongoose.model('User', UserSchema); 
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural