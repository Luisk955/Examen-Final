const express = require('express'),
      router = express.Router(),
      hotels = require('./hotels.api');

/**
 * 
 */
router.param('id', (req, res, next, id) => {
  req.body.id = id;
  next();
});


/**
 * Función que se encarga de registrar los hoteles dentro del mlab
 */
router.route('/save_hotel')
  .post((req, res) => {
    hotels.register(req,res);
});

/**
 * Función que obtiene todos los hoteles
 */

router.route('/get_all_hotels')
  .get((req, res) => {
    hotels.listAll(req,res);
});

/**
 * Función que actualiza los hoteles
 */

router.route('/update_hotel')
  .put((req, res) => {
    hotels.update(req,res);
});

router.route('/search_hotel_id')
  .post(function (req, res) {
    hotels.search_hotel_by_id(req, res);
  });


module.exports = router;