const express = require('express'),
      router = express.Router(),
      users = require('./users.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});


/**
 * Función que se encarga de registrar los usuarios dentro del local storage
 */
router.route('/save_user')
  .post((req, res) => {
    users.register(req,res);
});

/**
 * Función que obtiene todos los usuarios
 */

router.route('/get_all_users')
  .get((req, res) => {
    users.listAll(req,res);
});

/**
 * Función que actualiza los usuarios
 */

router.route('/update_user')
  .put((req, res) => {
    users.update(req,res);
});

router.route('/search_user_id')
  .post(function (req, res) {
    users.search_user_by_id(req, res);
  });


module.exports = router;