const HotelModel = require('./hotels.model');

module.exports.register = (req, res) => {
  var newHotel = new HotelModel({
    name              :  req.body.name,
    latitude                :  req.body.latitude,
    longitude        :  req.body.longitude,
    province       :  req.body.province,
    canton      :  req.body.canton,
    district      :  req.body.district,
    exactDirection     :  req.body.exactDirection,
    servicePhone              :  req.body.servicePhone,
    serviceEmail            :  req.body.serviceEmail,
    reservationPhone            :  req.body.reservationPhone,
    reservationEmail            :  req.body.reservationEmail,
    photo            :  req.body.photo,
    state: req.body.state,
  });

  newHotel.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de hoteles' + err});
    }else{
      res.json({success:true, msj:'Se registró el hotel correctamente'});
    }
  });
};

module.exports.listAll = (req,res) => {
  HotelModel.find().then((hotels) => {
    res.send(hotels);
  });
};

module.exports.update = (req,res) => {
  HotelModel.update({_id: req.body._id}, req.body, (err, hotel) => {
    if (err){
      res.json({success:false, msg: 'No se ha actualizado.' + handleError(err)});
    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};

module.exports.search_hotel_by_id = function(req, res){
  HotelModel.findById({_id : req.body.id}).then(
      function(hotel){
          res.send(hotel);
      });
};



