(() => {
  'use strict';
  angular
  .module('hoteles')
  .service('hotelsService', hotelsService);

  hotelsService.$inject = ['$log', '$http'];

  function hotelsService($log, $http){

    const loginAPI = {
      setHotelData : _setHotelData,
      getHotelsData:_getHotelsData,
      updateHotelData:_updateHotelData
    };
    return loginAPI;



    function _setHotelData(data) {
      let response;

      let petition = $.ajax({
        url: 'http://localhost:4000/api/save_hotel',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          name: data.name,
          latitude: data.latitude,
          longitude: data.longitude,
          province: data.province,
          canton: data.canton,
          district: data.district,
          exactDirection: data.exactDirection,
          servicePhone: data.servicePhone,
          serviceEmail: data.serviceEmail,
          reservationPhone: data.reservationPhone,
          reservationEmail: data.reservationEmail,
          photo: data.photo,
        },
      });

      petition.done(datos => {
        response = datos.msj;
        console.log('Petición realizada con éxito');
      });
      petition.fail(error => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }

    function _getHotelsData() {
      let hotelsList = [];

      let petition = $.ajax({
        url: 'http://localhost:4000/api/get_all_hotels',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {},
      });

      petition.done(hotels => {
        console.log('Datos que vienen desde la base de datos');
        console.log(hotels);
        hotels.forEach(objHotel => {
          let hotelTemp = Object.assign(new Hotel(), objHotel);

          hotelTemp.setId(objHotel._id);
          console.log(hotelTemp);
          hotelsList.push(hotelTemp);
        });
        // hotelsList = users;
      });
      petition.fail(() => {
        hotelsList = [];
        console.log('Ocurrió un error');
      });

      return hotelsList;
    }

    function _updateHotelData(data) {
      let response;

      let petition = $.ajax({
        url: 'http://localhost:4000/api/update_hotel',
        type: 'put',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          '_id': data._id,
          'name': data.name,
          'latitude': data.latitude,
          'longitude': data.longitude,
          'province': data.province,
          'canton': data.canton,
          'district': data.district,
          'exactDirection': data.exactDirection,
          'servicePhone': data.servicePhone,
          'serviceEmail': data.serviceEmail,
          'reservationPhone': data.reservationPhone,
          'reservationEmail': data.reservationEmail,
          'photo': data.photo,
        }
      });

      petition.done((datos) => {
        response = datos.success;
        console.log('Petición realizada con éxito');
      });
      petition.fail(error => {
        response = error;
        console.log('Ocurrió un error');
      });

      return response;
    }


  }
})();
