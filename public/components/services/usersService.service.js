(() => {
  'use strict';
  angular
    .module('hoteles')
    .service('usersService', usersService)

  usersService.$inject = ['$log', '$http'];

  function usersService($log, $http) {



    let publicAPI = {
      setUserData: _setUserData
    }
    return publicAPI

    function _setUserData (data) {
      let response;

      let peticion = $.ajax ({
        url: 'http://localhost:4000/api/save_user',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {
          idNumber: data.idNumber,
          name1: data.name1,
          name2: data.name2,
          lastName1: data.lastName1,
          lastName2: data.lastName2,
          email: data.email,
          birthDate: data.birthDate,
          phone: data.phone,
          password: data.password,
        },
      });

      peticion.done (datos => {
        response = datos.msj;
        console.log ('Petición realizada con éxito');
      });
      peticion.fail (error => {
        response = error;
        console.log ('Ocurrió un error');
      });

      return response;
    }



  };




})();