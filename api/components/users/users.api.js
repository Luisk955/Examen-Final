const UserModel = require('./users.model');

module.exports.register = (req, res) => {
  var newUser = new UserModel({
    idNumber              :  req.body.idNumber,
    name1                :  req.body.name1,
    name2        :  req.body.name2,
    lastName1       :  req.body.lastName1,
    lastName2      :  req.body.lastName2,
    email      :  req.body.email,
    birthDate     :  req.body.birthDate,
    phone              :  req.body.phone,
    password            :  req.body.password,
    type            :  req.body.type,
  });

  newUser.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de usuarios' + err});
    }else{
      res.json({success:true, msj:'Se registró el usuario correctamente'});
    }
  });
};

module.exports.listAll = (req,res) => {
  UserModel.find().then((users) => {
    res.send(users);
  });
};

module.exports.update = (req,res) => {
  UserModel.update({_id: req.body._id}, req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

module.exports.search_user_by_id = function(req, res){
  UserModel.findById({_id : req.body.id}).then(
      function(user){
          res.send(user);
      });
};



