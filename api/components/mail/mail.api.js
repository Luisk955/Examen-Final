let nodemailer = require('nodemailer');

module.exports.sendEmail = (req, res) =>{

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'byticos506@gmail.com', //CORREO_DEL_EQUIPO
      pass: 'mordiscode'        //CONTRASEÑA_DEL_EQUIPO
    }
  });

  let mailOptions = {
    from: 'byticos506@gmail.com',
    to: req.body.email,
    subject: req.body.subject,
    text: 'Su contraseña es: ' + req.body.password
  }

  transporter.sendMail(mailOptions,(error, info)=>{
    if(error){
      res.json({success:false, msg:error});
    }
    else{
      res.json({success:true});
    }
  })


};
